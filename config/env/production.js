console.log(process.env.DATABASE_SERVICE_NAME);
console.log(process.env);

var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
mongoPassword = process.env[mongoServiceName + '_PASSWORD']
mongoUser = process.env[mongoServiceName + '_USER'];

module.exports = {
    env: 'production',
    db: process.env.mongoUser + ":" +
        process.env.mongoPassword + "@" +
        process.env.mongoHost + ':' +
        process.env.mongoPort + '/' +
        process.env.mongoDatabase,
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