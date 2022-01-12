'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('addres', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull : false, 
        primaryKey : true,
        autoIncrement : true
      }, 
      cep : {
         type : Sequelize.INTEGER,
         allowNull : false, 
      }, 
      logradouro : {
        type : Sequelize.STRING, 
        allowNull : false
      },
      complemento : {
        type : Sequelize.STRING, 
        allowNull : true
      }, 
      bairro : {
        type : Sequelize.STRING, 
        allowNull : false
      }, 
      localidade : {
        type : Sequelize.STRING, 
        allowNull : false
      }, 
      uf : {
         type : Sequelize.STRING, 
         allowNull : false
      }, 
      ibge : {
        type : Sequelize.STRING, 
        allowNull : false
      }, 
      gia : {
        type : Sequelize.STRING, 
        allowNull : true
      }, 
      ddd : {
         type : Sequelize.STRING, 
         allowNull : true
      }, 
      siafi : {
          type : Sequelize.STRING, 
          allowNull : true
      }
     }, {timestamps : false}
     )
    },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('address');
  }
};