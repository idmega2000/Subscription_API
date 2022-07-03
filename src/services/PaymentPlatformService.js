import PaymentRepository from 'repository.js/PaymentGatewayRepository';
import APIException from 'utilities/APIException';
import { RESPONSE_MESSAGE } from 'utilities/Constants';

/**
* @description class will implement functionalities for payment gateway
*
* @class PaymentApprovalService
*/
class PaymentPlatformService {
  /**
   * @description
   * @returns {object} - object representing response message
   */
  static async fetchAllowedGateway() {
    const data = await PaymentRepository.findAll({ allowPayment: true });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data: { content: data } };
  }

  /**
   * @description - method to create payment gateway
   * @param {string} identifier - the payment gateway identifier
   * @param {string} publicKey - the gateway public key(used mostly on fronted)
   * @param {string}secretKey - the secret key for the gateway
   * @param {string}encryptionKey - the encryptionkey(mostly optional)
   * @returns {object} - object representing response message
   */
  static async createPaymentGateway(identifier, publicKey, secretKey, encryptionKey) {
    // check if key already exist
    const identifierExist = await PaymentRepository.findBy({ identifier });
    if (identifierExist) {
      throw new APIException(RESPONSE_MESSAGE.IDENTIFIER_EXIST);
    }

    await PaymentRepository.create({
      identifier, publicKey, secretKey, encryptionKey
    });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL };
  }

  /**
   * @description
   * @param {object} gatewayId - the payment gateway id
   * @returns {object} - object representing response message
   */
  static async disallowOrEnableGateway(gatewayId) {
    const gateway = await PaymentRepository.findById(gatewayId);

    if (!gateway) {
      throw new APIException(RESPONSE_MESSAGE.GATEWAY_NOT_EXIST);
    }
    const data = await PaymentRepository.update({ allowPayment: !gateway.allowPayment },
      { id: gatewayId });

    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data };
  }

  /**
   * @description
   * @param {object} gatewayId - the payment gateway id
   * @returns {object} - object representing response message
   */
  static async deletePaymentGateway(gatewayId) {
    const data = await PaymentRepository.destroy({ id: gatewayId });
    if (!data) {
      throw new APIException(RESPONSE_MESSAGE.GATEWAY_NOT_EXIST);
    }

    return { message: RESPONSE_MESSAGE.SUCCESSFUL };
  }

  /**
   * @description - method to update payment gateway credentials
   * @param {string} gatewayId - the payment gateway id
   * @param {string} publicKey - the gateway public key(used mostly on fronted)
   * @param {string}secretKey - the secret key for the gateway
   * @param {string}encryptionKey - the encryptionkey(mostly optional)
   * @returns {object} - object representing response message
   */
  static async updatePaymentGateway(gatewayId, publicKey, secretKey, encryptionKey) {
    const data = await PaymentRepository.update({ publicKey, secretKey, encryptionKey },
      { id: gatewayId });
    if (!data[0]) {
      throw new APIException(RESPONSE_MESSAGE.GATEWAY_NOT_EXIST);
    }
    return { message: RESPONSE_MESSAGE.SUCCESSFUL, data };
  }
}

export default PaymentPlatformService;
