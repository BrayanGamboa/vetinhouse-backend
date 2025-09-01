import Boom from '@hapi/boom';
import ListDocumentType from '../../../application/use_cases/mix/type_document/ListTypeDocument';
import CreateDocumentType from '../../../application/use_cases/mix/type_document/CreateTypeDocument';
import GetDocumentType from '../../../application/use_cases/mix/type_document/GetTypeDocument';
import DeleteUser from '../../../application/use_cases/mix/type_document/DeleteTypeDocument';

import { Request, ResponseToolkit } from "@hapi/hapi";

export default {

  async createDocumentType(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id, name, description } = request.payload as { id: number, name: string; description: string };

    // Treatment
    const documentType = await CreateDocumentType(id, name, description, serviceLocator);
    if (documentType === 403) {
      throw Boom.forbidden('Document type with this ID already exists');
    }
    // Output
    return serviceLocator.roleUserSerializer.serialize(documentType);
  },

  async findDocumentTypes(request: Request) {
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const rolesUser = await ListDocumentType(serviceLocator);

    // Output
    return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
  },

  async getDocumentType(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const roleUserId = request.params.id;

    // Treatment
    const user = await GetDocumentType(roleUserId, serviceLocator);

    // Output
    if (user.info == null) {
      throw Boom.notFound('Document type not found');
    }
    return serviceLocator.roleUserSerializer.serialize(user);
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
