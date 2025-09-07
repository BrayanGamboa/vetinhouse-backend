'use strict';

import { Request, Server } from "@hapi/hapi";

export default {
  name: 'private',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: '/private',
        options:
        {
          auth: 'oauth-jwt',
          handler: (request: Request) => request.auth.credentials.uid,
          description: 'Example of a private resource',
          tags: ['api'],
        },
      }
    ]);
  }
};