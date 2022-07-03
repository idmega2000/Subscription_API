import EncryptionHelper from 'helpers/EncryptionHelper';

export default (sequelize, DataTypes) => {
  const PaymentGateway = sequelize.define('PaymentGateway', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      field: 'Id',
      type: DataTypes.BIGINT
    },
    identifier: {
      field: 'Identifier',
      type: DataTypes.STRING,
    },
    publicKey: {
      field: 'PublicKey',
      type: DataTypes.TEXT,
      get() {
        return EncryptionHelper.decrypt(this.getDataValue('publicKey'));
      },
      set(publicKey) {
        return this.setDataValue('publicKey', EncryptionHelper.encrypt(publicKey));
      },
    },
    secretKey: {
      field: 'SecretKey',
      type: DataTypes.TEXT,
      async set(secretKey) {
        return this.setDataValue('secretKey', await EncryptionHelper.encrypt(secretKey));
      },
    },
    encryptionKey: {
      field: 'EncryptionKey',
      type: DataTypes.TEXT,
      async set(encryptionKey) {
        return this.setDataValue('encryptionKey', await EncryptionHelper.encrypt(encryptionKey));
      },
    },
    allowPayment: {
      field: 'AllowPayment',
      type: DataTypes.BOOLEAN,
      default: true,

    },
  },
  {
    paranoid: true,
  });
  return PaymentGateway;
};
