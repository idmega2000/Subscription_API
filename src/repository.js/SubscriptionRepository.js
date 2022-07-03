import models from 'database/models';

const { Subscription } = models;

/**
 *@description class will query for subscription
 *
 * @class PaymentGatewayRepository
 */
class PaymentGatewayRepository {
  // eslint-disable-next-line require-jsdoc
  static async create(data, transaction = null) {
    return Subscription.create(data, { transaction });
  }

  // eslint-disable-next-line require-jsdoc
  static async bulkCreate(data, { transaction = null, returning = null }) {
    return Subscription.bulkCreate(data, { transaction, returning });
  }

  // eslint-disable-next-line require-jsdoc
  static async findBy(where, exclude = []) {
    return Subscription.findOne({
      where: { ...where },
      attributes: { exclude }
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findMultipleBy(where, { limit, offset } = null, exclude = []) {
    return Subscription.findAndCountAll({
      where: { ...where },
      attributes: { exclude },
      ...(offset && limit && { offset, limit })
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findAll(where, exclude = []) {
    return Subscription.findAll({
      where: { ...where },
      attributes: { exclude },
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findById(id) {
    return Subscription.findByPk(id);
  }

  // eslint-disable-next-line require-jsdoc
  static async update(data, updateWhere) {
    return Subscription.update(
      data,
      {
        where: updateWhere,
      },
    );
  }

  // eslint-disable-next-line require-jsdoc
  static async destroy(where) {
    return Subscription.destroy(
      {
        where,
      },
    );
  }
}

export default PaymentGatewayRepository;
