import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import Package from '../../../package.json';
import { buildBeans, ServiceLocator } from '../../infrastructure/config/service-locator';
const Good = require('@hapi/good');
const Blipp = require('blipp');

declare module '@hapi/hapi' {
  interface ServerApplicationState {
    serviceLocator: ServiceLocator;
  }
}

import hello from '../../interfaces/routes/hello';


const createServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000
  });

  await server.register([
    Blipp,
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Test API Documentation',
          version: Package.version,
        },
      }
    },
    {
      plugin: Good,
      options: {
        ops: { interval: 1000 * 60 },
        reporters: {
          myConsoleReporter: [
            {
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{ ops: '*', log: '*', error: '*', response: '*' }]
            },
            { module: '@hapi/good-console' },
            'stdout'
          ]
        }
      },
    },
  ]);

  await server.register([
    require('../../interfaces/routes/hello').default,
    require('../../interfaces/routes/users').default,
  ]);

  server.app.serviceLocator = buildBeans();

  return server;
};

export default createServer;
