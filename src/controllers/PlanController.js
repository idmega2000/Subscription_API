import ServerResponses from 'helpers/ServerResponse';
import PaymentPlatformService from 'services/PaymentPlatformService';
import PlanService from 'services/PlanService';
/**
* @description class will implement functionalities for plans types
*
* @class PlanController
*/
class PlanController {
  /**
   * @description get all plans
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async getAllPlans(req, res, next) {
    try {
      const platforms = await PlanService.fetchAllPlans();
      const { message, data } = platforms;
      return ServerResponses.response(res, { message, data });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an plan
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async addAPlan(req, res, next) {
    try {
      const {
        title, description
      } = req.body;
      const createRequest = await PlanService
        .createPlan(title, description);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an plan
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async deleteAPlan(req, res, next) {
    try {
      const { planId } = req.params;
      const createRequest = await PlanService.deletePlan(planId);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an plan
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async updateAPlan(req, res, next) {
    try {
      const { planId } = req.params;
      const { title, description } = req.body;
      const createRequest = await PlanService.updatePlan(planId, title, description);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }
}

export default PlanController;
