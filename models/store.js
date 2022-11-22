const {Sequelize} = require("sequelize");

class Store extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          name: {type: Sequelize.STRING,  allowNull: false},
          city: {type: Sequelize.STRING,  allowNull: false},
          district: {type: Sequelize.STRING,  allowNull: false},
          category: {type: Sequelize.STRING,  allowNull: false},
          sub_category: {type: Sequelize.STRING,  allowNull: false},
          image_1: {type: Sequelize.STRING,  allowNull: false},
          image_2: {type: Sequelize.STRING,  allowNull: false},
          image_3: {type: Sequelize.STRING,  allowNull: false},
          tag_1: {type: Sequelize.STRING,  allowNull: false},
          tag_2: {type: Sequelize.STRING,  allowNull: false},
          tag_3: {type: Sequelize.STRING,  allowNull: false},
          adress: {type: Sequelize.STRING,  allowNull: false},
          number: {type: Sequelize.STRING,  allowNull: false},
          schedule: {type: Sequelize.STRING,  allowNull: false},
          informations: {type: Sequelize.STRING,  allowNull: false},
          description: {type: Sequelize.STRING,  allowNull: false},
          price_range: {type: Sequelize.STRING,  allowNull: false},

        }, {
          tableName: "Stores",
          modelName: "Stores",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
    // Booking.belongsToMany(models.Deal, {through : models.Booking_has_Deals})
  }

}

module.exports = Store;

////////////////////////////////////////////////////