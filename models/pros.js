const {Model, Sequelize} = require('sequelize');

class Pros extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          firstname: {type: Sequelize.STRING,  allowNull: false},
          lastname: {type: Sequelize.STRING,  allowNull: false},
          email: {type: Sequelize.STRING,  allowNull: false},
          number: {type: Sequelize.STRING,  allowNull: false},
          store: {type: Sequelize.STRING,  allowNull: false},
          hour: {type: Sequelize.STRING,  allowNull: false},
          date: {type: Sequelize.STRING,  allowNull: false}

        }, {
          tableName: "Pros",
          modelName: "Pros",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
    // Booking.belongsToMany(models.Deal, {through : models.Booking_has_Deals})
  }

}

module.exports = Pros;