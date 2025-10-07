import { Server } from '@hapi/hapi';
import ServiceScheduleController from '../../controllers/services/serviceScheduleController';
import { ServiceSchedulePayloadSchema, ServiceScheduleResponseSchema, ServiceScheduleListResponseSchema} from '../../../application/schemas/services/ServiceScheduleSchema';
import { CommonErrorResponses } from '../../../application/schemas/ErrorSchema';

const pathBase = '/services_schedule';

export default {
  name: 'Services Schedule',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: pathBase,
        handler: ServiceScheduleController.findServicesSchedule,
        options: {
          description: 'List all scheduled services',
          tags: ['api', 'Service Schedule'],
          response: {
            status: {
              200: ServiceScheduleListResponseSchema,
              401: CommonErrorResponses[401],
              404: CommonErrorResponses[404],
              500: CommonErrorResponses[500]
            }
          },
        },
      },
      {
        method: 'POST',
        path: pathBase,
        handler: ServiceScheduleController.createServiceSchedule,
        options: {
          description: 'Create a schedule service',
          tags: ['api', 'Service Schedule'],
          validate: {
            payload: ServiceSchedulePayloadSchema
          },
          response: {
            status: {
              200: ServiceScheduleResponseSchema,
              401: CommonErrorResponses[401],
              404: CommonErrorResponses[404],
              500: CommonErrorResponses[500]
            }
          }
        },
      },

    ]);
  }
};