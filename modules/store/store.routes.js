const router = require("express").Router();
const stores = require("./store.middlewares");

router.route("/stores").get(stores.getAllStores);

module.exports = router;
