const {Sequelize} = require("sequelize");

class Users extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          firstname: {type: Sequelize.STRING,  allowNull: false},
          lastname: {type: Sequelize.STRING,  allowNull: false},
          email: {type: Sequelize.STRING,  allowNull: false},
          password: {type: Sequelize.STRING,  allowNull: false}
        }, {
          tableName: "Users",
          modelName: "Users",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
    // Booking.belongsToMany(models.Deal, {through : models.Booking_has_Deals})
  }

}

module.exports = Users;

////////////////////////////////////////////////////