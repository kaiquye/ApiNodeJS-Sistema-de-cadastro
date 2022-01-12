require("dotenv").config();
const AuthJWT = require("../AuthJWT/Token");

const secret = process.env.secret;

const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../DataBase/Connection");

class User extends Model {
  //Model não tem construtor ;
  async CreateUser(req, res) {
    let { fistName, lastName, email, password } = req.body;
    try {
      let {id} = await User.create({
        fistName: fistName,
        lastName: lastName,
        email: email,
        password: password,
      });
      res.status(200).json({ msg: "user created", user: id });
    } catch (error) {
      res.status(400).json({ msg: "erro - create user" });
      console.error("erro - User/CreateUser" + error);
    }
  }
  async DeleteUser(req, res) {
    let { fistName, email } = req.body;
    try {
      let deleteUser = await User.destroy({ where: { email: email } });
      res.status(200).json({ msg: "delete user " + deleteUser });
    } catch (error) {
      res.status(401).json({ msg: "erro" });
      console.log(error);
    }
  }

  async FindUser(req, res) {
    let { id } = req.body;
    console.log(fistName, password);
    try {
      var resultUser = await User.findOne({
        where: { id },
      });
      if (resultUser == null || resultUser == undefined) {
        console.log("erro user : not fond user : " + resultUser);
        return res.status(401).json({ msg: "not fond user ", status: 401 });
      } else {
        //gerando o token
        let idUser = resultUser.id;
        let Token = AuthJWT.SingToken(idUser);
        res.json({ Token: Token, idUser: resultUser.id });
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async Update(req, res) {
    let { fistName, email, password } = req.body;
    try {
      let numberUserUpdate = await User.update(
        { fistName: fistName, password: password },
        { where: { email: email } }
      );
      if(numberUserUpdate == 0){res.json({msg : 'number uptade : ' +  numberUserUpdate})}
    } catch (erro) {
        console.log(erro);
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    fistName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(225),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  },
  { timestamps: false, sequelize, modelName: "users" }
);

//IRA INICIAR UMA INSTANCIA AUT DO MODEL
module.exports = new User();
