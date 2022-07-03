export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Subscriptions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id',
    },
    subscriptionStart: {
      allowNull: false,
      field: 'SubscriptionStart',
      type: Sequelize.DATE,
    },
    subscriptionStop: {
      allowNull: false,
      field: 'SubscriptionStop',
      type: Sequelize.DATE,
    },
    ongoingSubscriptionCount: {
      field: 'OngoingSubscriptionCount',
      type: Sequelize.INTEGER,
    },
    period: {
      type: Sequelize.INTEGER,
      field: 'PeriodId',
      allowNull: false,
      references: {
        model: 'Periods',
        key: 'id',
        as: 'period'
      }
    },
    // denormalize to reduce redundant joins
    planId: {
      type: Sequelize.INTEGER,
      field: 'PlanId',
      references: {
        model: 'Plans',
        key: 'id',
        as: 'plan'
      }
    },
    amount: {
      allowNull: false,
      field: 'Amount',
      type: Sequelize.INTEGER,
    },
    discount: {
      allowNull: false,
      field: 'Discount',
      type: Sequelize.INTEGER,
    },
    paymentMethod: {
      field: 'PaymentMethod',
      type: Sequelize.STRING,
    },
    isActive: {
      field: 'IsActive',
      type: Sequelize.BOOLEAN,
    },
    cancelReason: {
      field: 'CancelReason',
      type: Sequelize.STRING,
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
  down: (queryInterface) => queryInterface.dropTable('Subscriptions')
};
