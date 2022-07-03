import Joi from 'joi';
import organiseJoiError from './organiseJoiError';

/**
 * @description validation class
 */
class PaymentGatewayValidator {
  /**
     * @description - a validator method for validating creation of gateway
     * @param {*} req request object
     * @param {*} res  response object
     * @param {*} next next middleware
     * @returns {object} - validate user login credentials
     */
  static validateAddGateway(req, res, next) {
    const schema = Joi.object().keys({
      identifier: Joi.string().min(6).max(40).required(),
      publicKey: Joi.string().min(6).max(120).required(),
      encryptionKey: Joi.string().min(6).max(200).optional(),
      secretKey: Joi.string().min(6).max(200).required(),
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
  static validateUpdateGateway(req, res, next) {
    const schema = Joi.object().keys({
      publicKey: Joi.string().min(6).max(120).required(),
      encryptionKey: Joi.string().min(6).max(200).optional(),
      secretKey: Joi.string().min(6).max(200).required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      organiseJoiError(error);
    }
    return next();
  }
}

export default PaymentGatewayValidator;
