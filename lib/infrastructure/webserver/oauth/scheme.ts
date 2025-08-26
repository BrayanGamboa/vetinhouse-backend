'use strict';

const AuthorizationController = require('../../../interfaces/controllers/AuthorizationController');

export default () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken
  };
};