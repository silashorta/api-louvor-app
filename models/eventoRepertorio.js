'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventoRepertorio extends Model {}
  eventoRepertorio.init({}, {
    sequelize,
    modelName: 'eventoRepertorio',
  });
  return eventoRepertorio;
};