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
      const { id, name, description } = request.payload as { id: number, name: string; description: string };

      // Treatment
      const documentType = await CreateService(id, name, description, serviceLocator);

      // Output
      return serviceLocator.roleUserSerializer.serialize(documentType);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - createService');
    }
  },

  async findServices(request: Request) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListService(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('An internal server error occurred - findServices');
    }
  },

  async updateServices(request: Request) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListService(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('An internal server error occurred - findServices');
    }
  },

  async deleteServices(request: Request) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListService(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('An internal server error occurred - findServices');
    }
  },

};
