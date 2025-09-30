import Boom from '@hapi/boom';
import ListService from '../../../application/use_cases/services/service/ListService';
import CreateService from '../../../application/use_cases/services/service/CreateService';
import { Request, ResponseToolkit } from "@hapi/hapi";

export default {

  async createService(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const { id, name, description, value, scheduleServicioId } = request.payload as { id: number, name: string; description: string, value: number, scheduleServicioId: number };

      // Treatment
      const service = await CreateService(id, name, description, value, scheduleServicioId, serviceLocator);

      // Output
      return serviceLocator.roleUserSerializer.serialize(service);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - createService');
    }
  },

  async findServices(request: Request, h: ResponseToolkit) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const service = await ListService(serviceLocator);

      // Output
      if (service)
        return service.map(serviceLocator.serviceSerializer.serialize);
      
      throw Boom.notFound();
      
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - findServices');
    }
  },

  async updateServices(request: Request, h: ResponseToolkit) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListService(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - findServices');
    }
  },

  async deleteServices(request: Request, h: ResponseToolkit) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListService(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - findServices');
    }
  },

};
