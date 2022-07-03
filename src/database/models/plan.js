import EncryptionHelper from 'helpers/EncryptionHelper';

export default (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      field: 'Id',
      type: DataTypes.BIGINT
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
    },
    description: {
      field: 'description',
      type: DataTypes.TEXT,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      field: 'DeletedAt'
    },
  },
  {
    paranoid: true,
  });
  return Plan;
};
