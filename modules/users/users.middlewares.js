const path = require("path");
const models = require(path.resolve("./models"));
const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require("jsonwebtoken");
const {Strategy: LocalStrategy} = require("passport-local");
const bcryptService = require(path.resolve("./services/bcrypt"))
const debug = require("debug")("app:users")

exports.createUser = (req, res, next) => {
    debug("createUser");

    const {firstname, lastname, email, password,} = req.body;

    return execute()
        .then(() => {
            res.json({"Ok": true});
        })
        .catch((err) => {
            console.log(err)
            if (err.message === "UNIQUE_EMAIL") {
                return res.status(401).json({message: "L'adresse email est déjà utilisée"})
            }
            next(err)
        });

    async function execute() {
        try {
            const hashPassword = await bcryptService.hashPassword(password)
            const user = {
                password: hashPassword,
                firstname: firstname,
                lastname: lastname,
                email: email,
                //password: password,
            }
            // });

            console.log(user)
            return await models.User.create(user);
        } catch (err) {
            if (err.name === "SequelizeUniqueConstraintError") {
                throw Error("UNIQUE_EMAIL")
            }
            throw (err);
        }
    }
}

exports.loginUsers = (req, res, next) => {
    debug("loginUsers");

    return execute()
        .then(user => res.json(user))
        .catch((err) => {
            if (err === "NO_USER") {
                res.status(403).json({message: "Authentification échouée"});
            } else {
                next(err);
            }
        });

    async function execute() {
        try {
            const user = await new Promise(logUserWithPassport);
            const token = await generateJWT(user)
            return {user, token};

        } catch (err) {
            throw (err);
        }

        function logUserWithPassport(resolve, reject) {
            passport.authenticate('local', {session: false}, (err, user, info) => {
                console.log(user)
                if (err || !user) {
                    return reject(info.message);
                }
                console.log(user);
                return resolve(user);
            })(req, res, next)
        }

        function generateJWT(user) {
            return new Promise((resolve, reject) => {
                req.login(user, {session: false}, async (err) => {
                    console.log(user)
                    if (err) {
                        reject(err);
                    }
                    const {id, email} = user;
                    console.log(user)
                    const token = await jwt.sign({id, email}, process.env.JWT_SECRET);
                    return resolve(token)
                });
            })
        }
    }
}
