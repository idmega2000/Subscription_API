import PaymentGetwayController from 'controllers/PaymentGetwayController';
import { Router } from 'express';
import PaymentGatewayValidator from 'helpers/validators/PaymentGatewayValidator';

const paymentGatewayRouter = Router();
paymentGatewayRouter.get('/gateways', PaymentGetwayController.getAllPaymentPlaforms);

paymentGatewayRouter.post('/gateways',
  PaymentGatewayValidator.validateAddGateway,
  PaymentGetwayController.addPaymentPlaform);

paymentGatewayRouter.put('/gateways/:gatewayId',
  PaymentGatewayValidator.validateUpdateGateway,
  PaymentGetwayController.updatePaymentPlatform);

paymentGatewayRouter.put('/gateways/toggle/allow/:gatewayId',
  PaymentGetwayController.toggleAllowPaymentPlatform);

paymentGatewayRouter.delete('/gateways/:gatewayId',
  PaymentGetwayController.deletePaymentGateway);

export default paymentGatewayRouter;
