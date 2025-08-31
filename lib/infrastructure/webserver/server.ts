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
      plugin: require('hapi-pino'),
      options: {
        transport: process.env.NODE_ENV !== 'production'
          ? {
            target: 'pino-pretty',
            options: {
              colorize: true
            }
          }
          : undefined,
        logEvents: ['response', 'onPostStart', 'onPostStop'],
        logRequestComplete: true,
        // mergeHapiLogData: false, 
        ignorePaths: ['/swagger.json', '/swaggerui/*']
      }
    },
  ]);

  await server.register([
    require('../../interfaces/routes/hello').default,
    require('../../interfaces/routes/auth/user').default,
    require('../../interfaces/routes/auth/role_user').default,
  ]);

  server.app.serviceLocator = buildBeans();

  return server;
};

export default createServer;
