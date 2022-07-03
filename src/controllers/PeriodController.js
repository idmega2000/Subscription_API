import ServerResponses from 'helpers/ServerResponse';
import PaymentPlatformService from 'services/PaymentPlatformService';
import PeriodService from 'services/PeriodService';
/**
* @description class will implement functionalities for period types
*
* @class PeriodController
*/
class PeriodController {
  /**
   * @description get all plans
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async getAllPeriodOFAPlan(req, res, next) {
    try {
      const {
        planId
      } = req.params;
      const platforms = await PeriodService.fetchSubPeridOfPlan(planId);
      const { message, data } = platforms;
      return ServerResponses.response(res, { message, data });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an sub period
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async addPeriodToAPlan(req, res, next) {
    try {
      const {
        period, price, discount, planId
      } = req.body;

      const request = await PeriodService
        .createPeriod(planId, period, price, discount);
      const { message } = request;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an sub period
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async disableAPeriodForAPlan(req, res, next) {
    try {
      const { gatewayId } = req.params;
      const createRequest = await PaymentPlatformService.disallowOrEnableGateway(gatewayId);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an sub period
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async deleteAPeriod(req, res, next) {
    try {
      const { periodId } = req.params;

      const createRequest = await PeriodService.deletePeriod(periodId);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an sub period
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async updateAPeriod(req, res, next) {
    try {
      const { price, discount } = req.body;
      const { periodId } = req.params;
      const createRequest = await PeriodService.updatePeriod(periodId, price, discount);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }
}

export default PeriodController;
