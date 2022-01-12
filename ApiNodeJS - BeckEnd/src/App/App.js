const express = require('express');
const cors = require('cors');

const routerAddress = require('../Router/routerAddress/RouterAddress');
const routerUser = require('../Router/routerUser/RouterUser');


class App {
    constructor(){
        //criando uma instacia do Express;
        this.App = express();
        this.middlewares();
        this.routes();
    }
   middlewares(){
        //lendo arquivos JSON
        this.App.use(express.json())
        this.App.use(cors())
    }
    routes(){
        //nesta parte devera usar as Middleware, por esse motivo a rota e USE
        this.App.use('/user', routerUser);
        this.App.use('/address', routerAddress)
    }
}
//o construtor  carregar as rotas e "passa" para APP, instancia do Express
module.exports = new App().App