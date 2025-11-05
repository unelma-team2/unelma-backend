'use strict';
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

module.exports = {
    init(config) {
        const client = createClient(config.supabaseUrl, config.supabaseKey);

        return {
            async upload(file) {
                const ext = path.extname(file.name);
                const filePath = config.directory
                    ? `${config.directory}/${file.hash}${ext}`
                    : `${file.hash}${ext}`;

                const buffer = file.buffer || fs.readFileSync(file.path);

                const { error } = await client.storage.from(config.bucket).upload(filePath, buffer, {
                    contentType: file.mime,
                    upsert: true,
                });
                if (error) throw error;

                const { data } = client.storage.from(config.bucket).getPublicUrl(filePath);

                // Set proper fields
                file.url = data.publicUrl;
                file.pathOnBucket = filePath;

                // Strapi expects formats for images
                if (file.mime.startsWith('image/')) {
                    file.formats = {
                        thumbnail: {
                            url: data.publicUrl,
                            width: 245,
                            height: 156,
                            hash: `thumbnail_${file.hash}`,
                            ext,
                            mime: file.mime,
                            name: `thumbnail_${file.name}`,
                            pathOnBucket: filePath,
                        },
                    };
                }

                return file;
            },

            async delete(file) {
                const paths = [file.pathOnBucket];
                if (file.formats) {
                    Object.values(file.formats).forEach(fmt => {
                        if (fmt.pathOnBucket) paths.push(fmt.pathOnBucket);
                    });
                }
                if (paths.length) {
                    const { error } = await client.storage.from(config.bucket).remove(paths);
                    if (error) throw error;
                }
            },
        };
    },
};
