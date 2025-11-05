'use strict';

require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 5432,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: process.env.DATABASE_SSL_REJECT_UNAUTHORIZED !== 'false' } : false,
});

async function fixFiles() {
    try {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM files');

        for (const file of rows) {
            if (!file.url) {
                const baseUrl = `https://${process.env.SUPABASE_URL.replace(/^https?:\/\//, '')}/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/`;

                const formats = ['thumbnail', 'small', 'medium', 'large'].reduce((acc, size) => {
                    acc[size] = {
                        url: `${baseUrl}${size}_${file.hash}${file.ext}`,
                        pathOnBucket: `${size}_${file.hash}${file.ext}`,
                    };
                    return acc;
                }, {});

                const mainUrl = `${baseUrl}${file.hash}${file.ext}`;
                const pathOnBucket = `${file.hash}${file.ext}`;

                await client.query(
                    `
                    UPDATE files
                        SET url = $1::text,
                            formats = $2::jsonb
                        WHERE id = $3::bigint
                    `,
                    [mainUrl, JSON.stringify(formats), file.id]
                );

                console.log(`✅ Updated file ${file.name} (ID: ${file.id})`);
            }
        }

        console.log('🎉 All missing file URLs updated successfully!');
        client.release();
        process.exit(0);
    } catch (err) {
        console.error('❌ Error updating files:', err);
        process.exit(1);
    }
}

fixFiles();
