import models from 'database/models';

const { Plan } = models;

/**
 *@description class will query for plans
 *
 * @class PlanRepository
 */
class PlanRepository {
  // eslint-disable-next-line require-jsdoc
  static async create(data, transaction = null) {
    return Plan.create(data, { transaction });
  }

  // eslint-disable-next-line require-jsdoc
  static async bulkCreate(data, { transaction = null, returning = null }) {
    return Plan.bulkCreate(data, { transaction, returning });
  }

  // eslint-disable-next-line require-jsdoc
  static async findBy(where, exclude = []) {
    return Plan.findOne({
      where: { ...where },
      attributes: { exclude }
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findMultipleBy(where, { limit, offset } = null, exclude = []) {
    return Plan.findAndCountAll({
      where: { ...where },
      attributes: { exclude },
      ...(offset && limit && { offset, limit })
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findAll(where, exclude = ['secretKey', 'encryptionKey', 'deletedAt']) {
    return Plan.findAll({
      where: { ...where },
      attributes: { exclude },
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findById(id) {
    return Plan.findByPk(id);
  }

  // eslint-disable-next-line require-jsdoc
  static async update(data, updateWhere) {
    return Plan.update(
      data,
      {
        where: updateWhere,
      },
    );
  }

  // eslint-disable-next-line require-jsdoc
  static async destroy(where) {
    return Plan.destroy(
      {
        where,
      },
    );
  }
}

export default PlanRepository;
