import models from 'database/models';

const { Period } = models;

/**
 *@description class will query for period
 *
 * @class PeriodRepostory
 */
class PeriodRepostory {
  // eslint-disable-next-line require-jsdoc
  static async create(data, transaction = null) {
    return Period.create(data, { transaction });
  }

  // eslint-disable-next-line require-jsdoc
  static async bulkCreate(data, { transaction = null, returning = null }) {
    return Period.bulkCreate(data, { transaction, returning });
  }

  // eslint-disable-next-line require-jsdoc
  static async findBy(where, exclude = []) {
    return Period.findOne({
      where: { ...where },
      attributes: { exclude }
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findMultipleBy(where, { limit, offset } = null, exclude = []) {
    return Period.findAndCountAll({
      where: { ...where },
      attributes: { exclude },
      ...(offset && limit && { offset, limit })
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findAll(where, exclude = []) {
    return Period.findAll({
      where: { ...where },
      attributes: { exclude },
    });
  }

  // eslint-disable-next-line require-jsdoc
  static async findById(id) {
    return Period.findByPk(id);
  }

  // eslint-disable-next-line require-jsdoc
  static async update(data, updateWhere) {
    return Period.update(
      data,
      {
        where: updateWhere,
      },
    );
  }

  // eslint-disable-next-line require-jsdoc
  static async destroy(where) {
    return Period.destroy(
      {
        where,
      },
    );
  }
}

export default PeriodRepostory;
