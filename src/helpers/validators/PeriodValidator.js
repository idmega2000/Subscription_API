import Joi from 'joi';
import organiseJoiError from './organiseJoiError';

/**
 * @description validation class
 */
class PeriodValidator {
  /**
     * @description - a validator method for validating creation of gateway
     * @param {*} req request object
     * @param {*} res  response object
     * @param {*} next next middleware
     * @returns {object} - validate user login credentials
     */
  static validatePeriod(req, res, next) {
    const schema = Joi.object().keys({
      discount: Joi.number().required(),
      price: Joi.number().required(),
      planId: Joi.number().required(),
      period: Joi.string().required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      organiseJoiError(error);
    }
    return next();
  }

  /**
     * @description - a validator method for validating creation of gateway
     * @param {*} req request object
     * @param {*} res  response object
     * @param {*} next next middleware
     * @returns {object} - validate user login credentials
     */
  static validateUpdatePeriod(req, res, next) {
    const schema = Joi.object().keys({
      discount: Joi.number().required(),
      price: Joi.number().required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      organiseJoiError(error);
    }
    return next();
  }
}

export default PeriodValidator;
