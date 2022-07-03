export const RESPONSE_MESSAGE = {
  SOMETHING_WENT_WRONT: 'something went wrong, please try again',
  NOT_FOUND: 'route does not exist.',
  INVALID_JSON: 'invalid JSON payload passed.',
  SUCCESSFUL: 'successful',
  IDENTIFIER_EXIST: 'identifier already exist',
  GATEWAY_NOT_EXIST: 'gateway does not exist',

  PLAN_EXIST: 'plan already exist',
  PLAN_NOT_EXIST: 'plan does not exist',

  PERIOD_EXIST: 'period already exist',
  PERIOD_NOT_EXIST: 'period not exist',
};

export const ERROR_NAMES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  SYNTAX_ERROR: 'SYNTAX_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
};

export const STATUS_CODES = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SOMETHING_WENT_WRONT: 500,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

export const APP_VERSIONS = {
  V1: '/api/v1',
};
