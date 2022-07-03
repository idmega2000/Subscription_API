import { Router } from 'express';
import ServerResponse from 'helpers/ServerResponse';
// import ServerResponse from 'helpers/ServerResponse';
import { APP_VERSIONS } from 'utilities/Constants';

import v1Router from './api/v1';

const HOME = '/';

const router = Router();

router.get(HOME, (req, res) => ServerResponse.response(
  res, { status: 'success', message: 'Welcome' },
  200,
));

router.use(APP_VERSIONS.V1, v1Router);

export default router;
