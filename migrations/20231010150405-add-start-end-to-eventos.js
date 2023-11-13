'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('eventos', 'start', {
      type: Sequelize.DATE,
    });

    await queryInterface.addColumn('eventos', 'end', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('eventos', 'start');
    await queryInterface.removeColumn('eventos', 'end');
  },
};
