const router = require("express").Router();
const stores = require("./store.middlewares");

router.route("/stores").get(stores.getAllStores);
router.route("/store").post(stores.createStore);
router.route("/store/:id").get(stores.getStore);


module.exports = router;
