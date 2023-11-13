// models/eventos.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evento extends Model {
    static associate(models) {
      evento.belongsToMany(models.integrantes, {
        through: 'eventoIntegrante',
        foreignKey: 'eventoId'
      });
      evento.belongsToMany(models.repertorio, {
        through: 'eventoRepertorio',
        foreignKey: 'eventoId'
      });
    }
  }
  evento.init({
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    title: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    data: DataTypes.DATE,
    hora: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'evento',
  });
  return evento;
};
