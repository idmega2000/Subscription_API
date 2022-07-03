import PlanRepository from 'repository.js/PlanRepository';
import PeriodRepostory from 'repository.js/PeriodRepostory';
import APIException from 'utilities/APIException';
import { RESPONSE_MESSAGE } from 'utilities/Constants';

/**
* @description class will implement functionalities for sub period
*
* @class PeriodService
*/
class PeriodService {
  /**
   * @description
   * @param {string} planId - the plan id
   * @returns {object} - object representing response message
   */
  static async fetchSubPeridOfPlan(planId) {
    const data = await PeriodRepostory.findAll({ planId });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data: { content: data } };
  }

  /**
   * @description - method to create payment gateway
   * @param {string} planId - the plan id to be attached
   * @param {string} period - the plan id to be attached
   * @param {string} price - the plan id to be attached
   * @param {string} discount - the plan id to be attached
   * @returns {object} - object representing response message
   */
  static async createPeriod(planId, period, price, discount) {
    // check if key already exist
    const plan = await PlanRepository.findBy({ id: planId });
    if (!plan) {
      throw new APIException(RESPONSE_MESSAGE.PLAN_NOT_EXIST);
    }
    const periodData = await PeriodRepostory.findBy({ period });
    if (periodData) {
      throw new APIException(RESPONSE_MESSAGE.PERIOD_EXIST);
    }

    await PeriodRepostory.create({
      planId, period, price, discount
    });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL };
  }

  /**
   * @description
   * @param {object} periodId - the payment gateway id
   * @returns {object} - object representing response message
   */
  static async deletePeriod(periodId) {
    const data = await PeriodRepostory.destroy({ id: periodId });

    if (!data) {
      throw new APIException(RESPONSE_MESSAGE.PERIOD_NOT_EXIST);
    }

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data };
  }

  /**
   * @description - method to update period
   * @param {string} periodId - the period id to update
   * @param {string} price - the price
   * @param {string}discount - the discount
   * @returns {object} - object representing response message
   */
  static async updatePeriod(periodId, price, discount) {
    const data = await PeriodRepostory.update({ discount, price },
      { id: periodId });
    if (!data[0]) {
      throw new APIException(RESPONSE_MESSAGE.PERIOD_NOT_EXIST);
    }

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data };
  }
}

export default PeriodService;
