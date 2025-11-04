module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'supabase',
            providerOptions: {
                supabaseUrl: env('SUPABASE_URL'),
                supabaseKey: env('SUPABASE_SERVICE_ROLE_KEY'),
                bucket: env('SUPABASE_BUCKET', 'strapi-uploads'),
            },
        },
    },
});
