'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('repertorios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      subtitulo: {
        type: Sequelize.STRING
      },
      interprete: {
        type: Sequelize.STRING
      },
      tomFeminino: {
        type: Sequelize.STRING
      },
      tomMasculino: {
        type: Sequelize.STRING
      },
      andamento: {
        type: Sequelize.INTEGER
      },
      compasso: {
        type: Sequelize.STRING
      },
      linkYoutube: {
        type: Sequelize.STRING
      },
      letra: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('repertorios');
  }
};