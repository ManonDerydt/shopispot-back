const router = require("express").Router();
const user = require("./users.middlewares");
const passport = require('passport');

router.route("/user").post(user.createUser);
router.route("/users/login").post(user.loginUsers);

router.use("/user", passport.authenticate("jwt", {session: false}, null));


module.exports = router;