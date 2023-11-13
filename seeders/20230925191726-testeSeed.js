'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('integrantes', [{
      nome: 'Silas',
      sobrenome: 'Horta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Ester',
      sobrenome: 'Horta',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
