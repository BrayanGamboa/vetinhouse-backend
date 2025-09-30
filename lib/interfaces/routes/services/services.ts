import { Server } from '@hapi/hapi';
import ServiceController from '../../controllers/services/serviceController';
import { ServicePayloadSchema, ServiceResponseSchema, ServiceListResponseSchema} from '../../../application/schemas/services/ServiceSchema';
import { ErrorResponseSchema } from '../../../application/schemas/ErrorSchema';

const pathBase = '/service';

export default {
  name: 'Service',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: pathBase,
        handler: ServiceController.findServices,
        options: {
          description: 'List all services',
          tags: ['Document type', 'api'],
          response: {
            status: {
              200: ServiceListResponseSchema,
              401: ErrorResponseSchema,
              404: ErrorResponseSchema,
              500: ErrorResponseSchema
            }
          },
        },
      },
      {
        method: 'POST',
        path: pathBase,
        handler: ServiceController.createService,
        options: {
          description: 'Create a service',
          tags: ['Document type', 'api'],
          validate: {
            payload: ServicePayloadSchema
          },
          response: {
            status: {
              200: ServiceResponseSchema,
              401: ErrorResponseSchema,
              404: ErrorResponseSchema,
              500: ErrorResponseSchema
            }
          }
        },
      },

    ]);
  }
};