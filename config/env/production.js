module.exports = {
    env: 'production',
    mongoServiceName: process.env.DATABASE_SERVICE_NAME.toUpperCase(),
    db: process.env.[mongoServiceName + '_USER'] + ":" +
        process.env.[mongoServiceName + '_PASSWORD'] + "@" +
        process.env.[mongoServiceName + '_SERVICE_HOST'] + ':' +
        process.env.[mongoServiceName + '_SERVICE_PORT'] + '/' +
        process.env.[mongoServiceName + '_DATABASE'],
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