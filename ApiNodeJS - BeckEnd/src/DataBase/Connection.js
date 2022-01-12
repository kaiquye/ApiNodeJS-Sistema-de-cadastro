const Sequelize = require('sequelize');
const User = require('../model/users')
const addresses = require('../Model/address')

const banco = new Sequelize('ApiNodeJS-Fim', 'postgres', '1234', {
    host : 'localhost', 
    dialect : 'postgres'
})
User.init(banco)
addresses.init(banco)

addresses.associate(banco.models)
User.associate(banco.models)
module.exports = banco;