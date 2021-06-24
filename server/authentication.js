const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const dbConnection = require("./db-connector");
const secrets = require("./secrets");

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, callback) {
      const user = (await dbConnection.read("authUsers", { email }))[0];

      if (!user || user.password !== password) {
        return callback(null, false, {
          message: "Email or password are incorrect",
        });
      }
      return callback(null, user, { message: "Logged In Successfully" });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secrets.jwtToken,
    },
    function (jwtPayload, callback) {
      // find the user in db if needed. This functionality may
      // be omitted if you store everything you'll need in JWT payload.
      return dbConnection
        .read("authUsers", { email: jwtPayload.email })
        .then((user) => {
          return callback(null, user);
        })
        .catch((err) => {
          return callback(err);
        });
    }
  )
);
