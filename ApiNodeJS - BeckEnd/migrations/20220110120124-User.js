"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
          type: Sequelize.INTERGER,
          allowNull : false, 
          autoIncrement : true, 
          primaryKey: true
      }, 
      fistName: {
          type: Sequelize.STRING(25), 
          allowNull : false
      },
      lastName:{
         type: Sequelize.STRING(45), 
         allowNull : false
      }, 
      email : {
         type: Sequelize.STRING(255),
         allowNull : false,
         unique : true, 
         validade:{
           isEmail :{
              msg: 'Email address in use.'
           }, 
           notNull: {
              msg: 'Please enter your email'
           }
         }, 
        }, 
      password : {
        type: Sequelize.STRING, 
        allowNull : false
      }
    }, {timestamps : false});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
