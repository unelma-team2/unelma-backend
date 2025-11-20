const path = require("path");

module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-upload-supabase-provider",
            providerOptions: {
                apiUrl: env("SUPABASE_URL"),
                apiKey: env("SUPABASE_SERVICE_ROLE_KEY"),
                bucket: env("SUPABASE_BUCKET", "strapi_media"),
                directory: "",
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});


