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
    port: process.env.OPENSHIFT_NODEJS_PORT,
    address: process.env.OPENSHIFT_NODEJS_IP,
    domain: process.env.OPENSHIFT_APP_DNS
    };