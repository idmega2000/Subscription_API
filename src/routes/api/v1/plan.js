import PlanController from 'controllers/PlanController';
import { Router } from 'express';
import PlanValidator from 'helpers/validators/PlanValidator';

const planRouter = Router();
planRouter.get('/plans', PlanController.getAllPlans);

planRouter.post('/plans',
  PlanValidator.validatePlan,
  PlanController.addAPlan);

planRouter.put('/plans/:planId',
  PlanValidator.validatePlan,
  PlanController.updateAPlan);

planRouter.delete('/plans/:planId',
  PlanController.deleteAPlan);

export default planRouter;
