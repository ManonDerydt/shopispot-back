const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:users");

exports.getAllStores = (req, res, next) => {
    debug("getAllStores");

    return execute()
        .then(stores => res.json(stores))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Store.findAll();
        }catch (error){
            throw error;
        }
    }
};
