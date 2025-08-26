'use strict';

import { Server } from "@hapi/hapi";

const AuthorizationController = require('../../../interfaces/controllers/AuthorizationController');

export default {
  name: 'oauth',
  version: '1.0.0',
  register: (server: Server) => {

    server.auth.scheme('oauth', require('./scheme'));

    server.auth.strategy('oauth-jwt', 'oauth');

    server.route({
      method: 'POST',
      path: '/oauth/token',
      handler: AuthorizationController.getAccessToken,
      options: {
        description: 'Return an OAuth 2 access token',
        tags: ['api'],
      },
    });
  }
};
