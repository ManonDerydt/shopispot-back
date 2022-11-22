const dotenv = require("dotenv");
dotenv.config();

const {Sequelize, Op} = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_ROOT,
    process.env.DB_PASSWORD,
    {
      dialect: 'mysql',
      define: {underscored: true, timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at'},
      logging: false,
      host: process.env.MYSQL_HOST,
      maxConcurrentQueries: 350,
      sync: {force: false},
      pool: {
        max: 36,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
);

const models = {

}

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));


models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.Op = Op;
module.exports = models;
