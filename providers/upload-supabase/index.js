"use strict";

const { createClient } = require("@supabase/supabase-js");
const path = require("path");

module.exports = {
    init(config) {
        const client = createClient(config.supabaseUrl, config.supabaseKey);

        return {
            async upload(file) {
                try {
                    const filePath = `${config.directory || ""}/${file.hash}${path.extname(file.name)}`;
                    const { data, error } = await client.storage
                        .from(config.bucket)
                        .upload(filePath, Buffer.from(file.buffer, "binary"), {
                            contentType: file.mime,
                            upsert: true,
                        });

                    if (error) throw error;

                    const { data: publicUrlData } = client.storage
                        .from(config.bucket)
                        .getPublicUrl(filePath);

                    file.url = publicUrlData.publicUrl;
                    return file;
                } catch (err) {
                    console.error("Supabase upload error:", err);
                    throw err;
                }
            },

            async delete(file) {
                try {
                    const filePath = file.url.split("/").slice(-1)[0];
                    const { error } = await client.storage.from(config.bucket).remove([filePath]);
                    if (error) throw error;
                } catch (err) {
                    console.error("Supabase delete error:", err);
                    throw err;
                }
            },
        };
    },
};
