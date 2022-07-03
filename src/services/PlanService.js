import PaymentRepository from 'repository.js/PaymentGatewayRepository';
import PlanRepository from 'repository.js/PlanRepository';
import APIException from 'utilities/APIException';
import { RESPONSE_MESSAGE } from 'utilities/Constants';

/**
* @description class will implement functionalities for plan
*
* @class PlanService
*/
class PlanService {
  /**
   * @description
   * @returns {object} - object representing response message
   */
  static async fetchAllPlans() {
    const data = await PlanRepository.findAll();

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data: { content: data } };
  }

  /**
   * @description - method to create payment gateway
   * @param {string} title - the title of the plan
   * @param {string} description - the description of the plan
   * @returns {object} - object representing response message
   */
  static async createPlan(title, description) {
    // check if key already exist
    const planExist = await PlanRepository.findBy({ title });
    if (planExist) {
      throw new APIException(RESPONSE_MESSAGE.PLAN_EXIST);
    }

    await PlanRepository.create({
      title, description
    });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL };
  }

  /**
   * @description
   * @param {object} planId - the plan id
   * @returns {object} - object representing response message
   */
  static async deletePlan(planId) {
    const data = await PlanRepository.destroy({ id: planId });
    if (!data) {
      throw new APIException(RESPONSE_MESSAGE.PLAN_NOT_EXIST);
    }

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data };
  }

  /**
   * @description - method to update plan
   * @param {string} planId - the plan id
   * @param {string} title - the title
   * @param {string} description - the description
   * @returns {object} - object representing response message
   */
  static async updatePlan(planId, title, description) {
    const data = await PaymentRepository.update({ description, title },
      { id: planId });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data };
  }
}

export default PlanService;
