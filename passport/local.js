const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("../models");
const bcryptService = require("../services/bcrypt");

passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    async (email, password, cb) => {
        try {
            const user = await models.User.findOne({
                attributes: ["id", "lastname", "firstname", "email", "password"],
                where: {
                    email
                }
            });

            if (!user) {
                return cb(null, false, {message: "NO_USER"})
            }
            const matchPassword = await bcryptService.comparePassword(password, user.password);
            if (!matchPassword) {
                return cb(null, false, {message: "NO_USER"})
            }
            delete user.dataValues.password;
            return cb(null, user, {message: "OK"})
        } catch (error) {
            return cb(error)
        }
    }
));