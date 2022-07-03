export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Periods', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id',
    },
    period: {
      field: 'Period',
      type: Sequelize.STRING,
    },
    price: {
      field: 'Price',
      type: Sequelize.INTEGER,
    },
    discount: {
      field: 'Discount',
      type: Sequelize.INTEGER,
    },
    planId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'PlanId',
      references: {
        model: 'Plans',
        key: 'id',
        as: 'plan'
      }
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
  down: (queryInterface) => queryInterface.dropTable('Periods')
};
