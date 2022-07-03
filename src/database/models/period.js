export default (sequelize, DataTypes) => {
  const Period = sequelize.define('Period', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      field: 'Id',
      type: DataTypes.BIGINT
    },
    period: {
      field: 'period',
      type: DataTypes.STRING,
    },
    price: {
      field: 'price',
      type: DataTypes.INTEGER,
    },
    discount: {
      field: 'discount',
      type: DataTypes.INTEGER,
    },
  },

  {
    paranoid: true,
  });
  Period.associate = (models) => {
    Period.belongsTo(models.Plan, {
      foreignKey: 'planId',
      as: 'plan'
    });
  };
  return Period;
};
