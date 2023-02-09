const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authD = require('./models/User.js');
const passport = require("passport");

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  passReqToCallback : true
},
function(request, accessToken, refreshToken, profile, cb) {
  authD.findOne({ social_id: profile.id}, function (err, user) {
    if (err) return cb(err, null);

        if (!user) {
          let newUser = new authD({
          social_id: profile.id,
          username : profile.displayName,
          email : profile.emails[0]?.value,
          img:profile.photos[0]?.value,    
          });
          newUser.save();
          return cb(null, newUser);
        } else {
          return cb(null, user);
        }
  });
}
));


