const { Model, Sequelize, DataTypes } = require("sequelize");
const users = require('./users')
class Address extends Model {
  //class model não pode ter contrutor

  static init(sequelize){
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        cep: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        logradouro : {
            type : DataTypes.STRING,
            allowNull : false
        },
        complemento: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        localidade: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        uf: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ibge: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        gia: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ddd: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        siafi: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      { timestamps: false, sequelize, modelName: "address" }
    );
  }

  static associate(models){
      this.belongsTo(models.users, { foreignKey: 'user_id'});
  }

  static async CreateAddress(req, res) {
    
    const {user_id, ...endereco} = req.body;

    let fff = users.FindUser(user_id)
    if(fff){
            let { cep, complemento, bairro, logradouro, localidade, uf, ibge, gia, ddd, siafi } =
            req.body;
          console.log(req.body);
          try {
            let address = await Address.create({
              cep: 'cep',
              logradouro : 'logradouro',
              complemento: 'complemento',
              bairro: 'bairro',
              localidade: 'localidade',
              uf: 'uf',
              ibge: 'ibge',
              gia: 'gia',
              ddd: 'ddd',
              siafi: 'siafi',
              user_id
            });
            res.status(200).json({ msg: "address created", address: address });
          } catch (error) {
            res.status(400).json({ msg: "erro address" + error });
            console.log(error);
          }
    }else{
      res.json({erro : 'erro'})
    }
  
  }
  async DeleteAddress(req, res) {
    let { cep } = req.body;
    try {
      let result = await Address.destroy({ where: { cep: cep } });
      res.status(200).json({ msg: "delete address " + deleteUser });
    } catch (error) {
      res.status(400).json({ msg: "erro, delete address" + deleteUser });
      console.log(error);
    }
  }
  async FindAddress(req, res) {
    let { cep } = req.body;
    try {
      let result = await Address.findAll({ where: { cep: cep } });
      if (result == null || result == undefined) {
        return res.status(401).json({ mgs: "erro in find address" });
      } else {
        return res.status(200).json({ msg: "address true", result: result });
      }
    } catch (error) {
      res.status(400).json({ erro: error });
      console.log(error);
    }
  }
}
module.exports = Address;
