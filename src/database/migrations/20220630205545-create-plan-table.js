export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Plans', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id',
    },
    title: {
      field: 'Title',
      type: Sequelize.STRING,
    },
    description: {
      field: 'Description',
      type: Sequelize.TEXT,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      field: 'DeletedAt'
    },
    createdAt: {
      allowNull: false,
      field: 'CreatedAt',
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      field: 'UpdatedAt',
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  },
  {
  }),
  down: (queryInterface) => queryInterface.dropTable('Plans')
};
