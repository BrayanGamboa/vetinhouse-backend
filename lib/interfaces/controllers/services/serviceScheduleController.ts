import Boom from '@hapi/boom';
import ListScheduleService from '../../../application/use_cases/services/service_schedule/ListServiceSchedule';
import CreateServiceSchedule from '../../../application/use_cases/services/service_schedule/CreateServiceSchedule';
import { Request, ResponseToolkit } from "@hapi/hapi";
import { ScheduleSchema } from '../../../application/utilities/general_functions';

export default {

  async createServiceSchedule(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const { id, name, schedule } = request.payload as { id: number, name: string; schedule: JSON };

      // Treatment
      const service = await CreateServiceSchedule(id, name, schedule, serviceLocator);

      // Output
      return serviceLocator.serviceScheduleSerializer.serialize(service);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - createServiceSchedule');
    }
  },

  async findServicesSchedule(request: Request, h: ResponseToolkit) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const service = await ListScheduleService(serviceLocator);

      // Output
      return service.map(serviceLocator.serviceScheduleSerializer.serialize);
      
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - findServicesSchedule');
    }
  },
};