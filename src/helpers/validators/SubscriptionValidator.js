import Joi from 'joi';
import organiseJoiError from './organiseJoiError';

/**
 * @description validation class
 */
class SubscriptionValidator {
  /**
     * @description - a validator method for validating creation of gateway
     * @param {*} req request object
     * @param {*} res  response object
     * @param {*} next next middleware
     * @returns {object} - validate user login credentials
     */
  static validateSubscription(req, res, next) {
    const schema = Joi.object().keys({
      period: Joi.string().min(6).max(40).required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      organiseJoiError(error);
    }
    return next();
  }
}

export default SubscriptionValidator;
