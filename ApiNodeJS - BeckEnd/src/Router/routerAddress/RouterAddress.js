const routers = require('express').Router(); 
const modelAddress = require('../../Model/address');

class RouterAddress {
    constructor (){
        this.route = routers; 
        this.routes();
    }
    routes(){
        this.route.post('/create-address', modelAddress.CreateAddress);
    }
}

module.exports = new RouterAddress().route;