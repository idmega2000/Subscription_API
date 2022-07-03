export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PaymentGateways', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'Id',
    },
    identifier: {
      field: 'Identifier',
      type: Sequelize.STRING,
    },
    publicKey: {
      field: 'PublicKey',
      type: Sequelize.STRING,
    },
    secretKey: {
      field: 'SecretKey',
      type: Sequelize.STRING,
    },
    encryptionKey: {
      field: 'EncryptionKey',
      type: Sequelize.STRING,
    },
    allowPayment: {
      field: 'AllowPayment',
      type: Sequelize.BOOLEAN,
      defaultValue: true,
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
  down: (queryInterface) => queryInterface.dropTable('PaymentGateways')
};
