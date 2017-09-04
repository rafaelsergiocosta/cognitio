module.exports = {
    env: 'production',
    db: process.env.OPENSHIFT_MONGODB_DB_URL + 'cognitio',
    github: {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    facebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    },
    port: '8080',
    address: '0.0.0.0',
    domain: process.env.OPENSHIFT_APP_DNS
    };