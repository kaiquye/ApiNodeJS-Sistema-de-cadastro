require('dotenv').config();
const secret = process.env.secret;
const JWT = require('jsonwebtoken');


class AuthJWT {
    constructor(req, res, next){
        this.verifyToken(req, res, next);
        this.SingToken();
    }
   static async verifyToken(){
        let Token = req.body.Token;
    try {
        let result = await JWT.verify(Token, secret)
        console.log(result);
        req.status(200).body({userStatus : true, msg : 'usuario valido'});
    } catch (error) {
        req.status(400).json({msg : 'erro veriftToken', error})
        console.log(error)
    };
    };
   static SingToken(idUser){
        return JWT.sign({idUser}, secret, {expiresIn : 300});
    }
}

module.exports = AuthJWT