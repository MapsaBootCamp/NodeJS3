const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URI,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log("request", request);
      console.log("accessToken", accessToken);
      console.log("profile", profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("+++++++++++++");
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@");
  console.log(user);
  done(null, user);
});
