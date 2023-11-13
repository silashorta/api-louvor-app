'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class repertorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      repertorio.belongsToMany(models.evento, {
        through: 'eventoRepertorio',
        foreignKey: 'repertorioId'
      });
    }
  }
  repertorio.init({
    titulo: DataTypes.STRING,
    subtitulo: DataTypes.STRING,
    interprete: DataTypes.STRING,
    tomFeminino: DataTypes.STRING,
    tomMasculino: DataTypes.STRING,
    andamento: DataTypes.INTEGER,
    compasso: DataTypes.STRING,
    linkYoutube: DataTypes.STRING,
    letra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'repertorio',
  });
  return repertorio;
};