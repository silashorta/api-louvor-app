'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class integrantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      integrantes.belongsToMany(models.evento, {
        through: 'eventoIntegrante',
        foreignKey: 'integranteId'
      });
    }
  }
  integrantes.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    posicao: DataTypes.STRING,
    categoria: DataTypes.STRING,
    categoria2: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'integrantes',
  });
  return integrantes;
};