'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventoIntegrante extends Model {}
  eventoIntegrante.init({}, {
    sequelize,
    modelName: 'eventoIntegrante',
  });
  return eventoIntegrante;
};