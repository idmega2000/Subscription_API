import PeriodController from 'controllers/PeriodController';
import { Router } from 'express';
import PeriodValidator from 'helpers/validators/PeriodValidator';

const periodRouter = Router();

periodRouter.get('/periods/:planId',
  PeriodController.getAllPeriodOFAPlan);

periodRouter.put('/periods/:periodId',
  PeriodValidator.validateUpdatePeriod,
  PeriodController.updateAPeriod);

periodRouter.post('/periods',
  PeriodValidator.validatePeriod,
  PeriodController.addPeriodToAPlan);

periodRouter.delete('/periods/:periodId',
  PeriodController.deleteAPeriod);

export default periodRouter;
