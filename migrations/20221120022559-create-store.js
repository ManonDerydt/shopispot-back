'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      sub_category: {
        type: Sequelize.STRING
      },
      image_1: {
        type: Sequelize.STRING
      },
      image_2: {
        type: Sequelize.STRING
      },
      image_3: {
        type: Sequelize.STRING
      },
      tag_1: {
        type: Sequelize.STRING
      },
      tag_2: {
        type: Sequelize.STRING
      },
      tag_3: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      },
      informations: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price_range: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stores');
  }
};