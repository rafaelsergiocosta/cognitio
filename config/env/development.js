module.exports = {
    env: 'development',
    db: 'localhost/cognitio',
    github: {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    facebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    },
    selenium: {
        user: process.env.SELENIUM_USER,
        userPassword: process.env.SELENIUM_USER_PASSWORD
    },
    port: 3000,
    address: 'localhost',
    domain: 'localhost'
};