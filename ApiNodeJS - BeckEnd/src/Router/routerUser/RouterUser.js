const router = require('express').Router()

const modelUser = require('../../Model/users');


class Router{
    constructor(){
        this.routers = router; 
        this.routes();
    }
    routes(){
        //caso que queira, posso inicar um middlwware aqui, assim ele sera executado primeiro ! 
        this.routers.post('/create', modelUser.CreateUser);
        this.routers.post('/login', modelUser.FindUser)
        this.routers.post('/update', modelUser.Update)
    }
}


//Passando a class ja instaciada : Executara todos os metodos que estão no contructor
//Dessa forma fica mais facil ja deixa as rotas no contructor, pois so usaremos ela.
module.exports = new Router().routers;