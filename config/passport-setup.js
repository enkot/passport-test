const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

passport.use(
    new GoogleStrategy({
        // options
        callbackURL: '/auth/google/redirect',
        clientID: '740637716139-5fchdi057fpcevd4v9dinsgpub5j5iop.apps.googleusercontent.com',
        clientSecret: '-kvx1U5uWLIvm16jJlvA-DBR',
    }, (accessToken, refreshToken, profile, done) => {
        // passport cb
    })
)