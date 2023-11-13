'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('eventos', 'titulo', 'title');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('eventos', 'title', 'titulo');
  },
};
