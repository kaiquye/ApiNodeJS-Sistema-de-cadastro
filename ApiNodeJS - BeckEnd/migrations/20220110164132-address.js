'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('address', { 
    id:{
    type : Sequelize.INTEGER,
    allowNull : false, 
    autoIncrement : true,
    primaryKey : true
   },
   cep : {
     type : Sequelize.INTEGER, 
     allowNull : false
   }
  }, {timestamps : false} );
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
