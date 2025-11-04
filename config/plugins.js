const path = require("path");

module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: path.resolve(__dirname, "../providers/upload-supabase"),
            providerOptions: {
                supabaseUrl: env("SUPABASE_URL"),
                supabaseKey: env("SUPABASE_SERVICE_ROLE_KEY"),
                bucket: env("SUPABASE_BUCKET"),
                directory: "", // optional: folder prefix inside the bucket
            },
        },
    },
});
