import models from 'database/models';

const { PaymentGateway } = models;

/**
 *@description class will query for payment
 *
 * @class PaymentGatewayRepository
 */
class PaymentGatewayRepository {
  // eslint-disable-next-line require-jsdoc
  static async create(data, transaction = null) {
    return PaymentGateway.create(data, { transaction });
  }

  // eslint-disable-next-line require-jsdoc
  static async bulkCreate(data, { transaction = null, returning = null }) {
    return PaymentGateway.bulkCreate(data, { transaction, returning });
  }

  // eslint-disable-next-line require-jsdoc
  static async findBy(where, exclude = []) {
    return PaymentGateway.findOne({
      where: { ...where },
      attributes: { exclude }
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findMultipleBy(where, { limit, offset } = null, exclude = []) {
    return PaymentGateway.findAndCountAll({
      where: { ...where },
      attributes: { exclude },
      ...(offset && limit && { offset, limit })
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findAll(where, exclude = ['secretKey', 'encryptionKey', 'deletedAt']) {
    return PaymentGateway.findAll({
      where: { ...where },
      attributes: { exclude },
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findById(id) {
    return PaymentGateway.findByPk(id);
  }

  // eslint-disable-next-line require-jsdoc
  static async update(data, updateWhere) {
    return PaymentGateway.update(
      data,
      {
        where: updateWhere,
      },
    );
  }

  // eslint-disable-next-line require-jsdoc
  static async destroy(where) {
    return PaymentGateway.destroy(
      {
        where,
      },
    );
  }
}

export default PaymentGatewayRepository;
