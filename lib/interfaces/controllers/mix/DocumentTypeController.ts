import Boom from '@hapi/boom';
import ListDocumentType from '../../../application/use_cases/mix/type_document/ListTypeDocument';
import CreateDocumentType from '../../../application/use_cases/mix/type_document/CreateTypeDocument';
import GetDocumentType from '../../../application/use_cases/mix/type_document/GetTypeDocument';

import { Request, ResponseToolkit } from "@hapi/hapi";

export default {

  async createDocumentType(request: Request, h: ResponseToolkit) {
    try{
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const { id, name, description } = request.payload as { id: number, name: string; description: string };

      // Treatment
      const documentType = await CreateDocumentType(id, name, description, serviceLocator);

      // Output
      return serviceLocator.roleUserSerializer.serialize(documentType);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - createDocumentType');
    }
  },

  async findDocumentTypes(request: Request) {
    try{
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListDocumentType(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    }catch (err) {
      console.error(err);
      throw Boom.badImplementation('An internal server error occurred - findDocumentTypes');
    }
  },

  async getDocumentType(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const roleUserId = request.params.id;

    // Treatment
    const user = await GetDocumentType(roleUserId, serviceLocator);

    // Output
    return user ? serviceLocator.roleUserSerializer.serialize(user): Boom.notFound('Document type not found');
  },

  // async deleteUser(request: Request, h: ResponseToolkit) {

  //   // Context
  //   const serviceLocator = request.server.app.serviceLocator;

  //   // Input
  //   const userId = request.params.id;

  //   // Treatment
  //   await DeleteUser(userId, serviceLocator);

  //   // Output
  //   return h.response().code(204);
  // },

};
