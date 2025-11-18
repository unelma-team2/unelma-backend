const path = require("path");

module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-upload-supabase",
            providerOptions: {
                apiUrl: env("SUPABASE_URL"),
                apiKey: env("SUPABASE_SERVICE_ROLE_KEY"),
                bucket: env("SUPABASE_BUCKET", "strapi_media"),
                directory: env("SUPABASE_DIRECTORY", undefined),
            },
        },
    },
});

