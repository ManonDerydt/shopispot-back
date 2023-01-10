const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const models = require("./models");
const storeRoutes = require("./modules/store/store.routes");
const userRoutes = require("./modules/users/users.routes");
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res, next) => res.send("OK"));
app.use(storeRoutes);
app.use(userRoutes);

require("./passport/local");
//require("./passport/jwt");

(async() => {
    try {
        await models.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = app;
