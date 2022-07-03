import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import ServerResponse from 'helpers/ServerResponse';
import swaggerConfig from '../../../../docs/config/swaggerConfig';
import paymentGatewayRouter from './paymentGateways';
import periodRouter from './period';
import planRouter from './plan';

const { NODE_ENV } = process.env;
const v1Router = Router();

v1Router.get('', (req, res) => ServerResponse.response(
  res, { status: 'success', message: 'Welcome to version 1' },
  200,
));

v1Router.use('/payment', paymentGatewayRouter);
v1Router.use('/payment', planRouter);
v1Router.use('/payment', periodRouter);
NODE_ENV !== 'production' ? v1Router.use('/docs',
  swaggerUi.serve, swaggerUi.setup(swaggerConfig)) : null;

export default v1Router;
