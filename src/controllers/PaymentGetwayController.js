import ServerResponses from 'helpers/ServerResponse';
import PaymentPlatformService from 'services/PaymentPlatformService';
/**
* @description class will implement functionalities for gateway types
*
* @class PaymentPlatformController
*/
class PaymentGetwayController {
  /**
   * @description create an payment gateway
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async getAllPaymentPlaforms(req, res, next) {
    try {
      const platforms = await PaymentPlatformService.fetchAllowedGateway();
      const { message, data } = platforms;
      return ServerResponses.response(res, { message, data });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an payment gateway
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async addPaymentPlaform(req, res, next) {
    try {
      const {
        identifier, publicKey, encryptionKey, secretKey
      } = req.body;
      const createRequest = await PaymentPlatformService
        .createPaymentGateway(identifier, publicKey, secretKey, encryptionKey);
      const { message } = createRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an payment gateway
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async toggleAllowPaymentPlatform(req, res, next) {
    try {
      const { gatewayId } = req.params;
      const toggle = await PaymentPlatformService.disallowOrEnableGateway(gatewayId);
      const { message } = toggle;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an payment gateway
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async deletePaymentGateway(req, res, next) {
    try {
      const { gatewayId } = req.params;
      const deleteGateway = await PaymentPlatformService.deletePaymentGateway(gatewayId);
      const { message } = deleteGateway;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @description create an payment gateway
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async updatePaymentPlatform(req, res, next) {
    try {
      const { gatewayId } = req.params;
      const {
        publicKey, encryptionKey, secretKey
      } = req.body;
      const updateRequest = await PaymentPlatformService
        .updatePaymentGateway(gatewayId, publicKey, secretKey, encryptionKey);
      const { message } = updateRequest;
      return ServerResponses.response(res, { message });
    } catch (error) {
      return next(error);
    }
  }
}

export default PaymentGetwayController;
