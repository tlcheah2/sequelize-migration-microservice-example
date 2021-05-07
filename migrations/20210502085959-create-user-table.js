'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING,
    isPaidMember: Sequelize.DataTypes.BOOLEAN
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};