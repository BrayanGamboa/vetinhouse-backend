import Boom from '@hapi/boom';
import ListUsers from '../../../../application/use_cases/auth/user/ListUsers';
import CreateUser from '../../../../application/use_cases/auth/user/CreateUser';
import GetUser from '../../../../application/use_cases/auth/user/GetUser';
import DeleteUser from '../../../../application/use_cases/auth/user/DeleteUser';

import { Request, ResponseToolkit } from "@hapi/hapi";

export default {

  async createUser(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { document, name, lastName, email, password, roleId, documentTypeId } = request.payload as { document: string, name: string; lastName: string; email: string; password: string, roleId: number, documentTypeId: number };

    // Treatment
    const user = await CreateUser(document, name, lastName, email, password, roleId, documentTypeId, serviceLocator);

    // Output
    return serviceLocator.userSerializer.serialize(user);
  },

  // async findUsers(request: Request) {

  //   // Context
  //   const serviceLocator = request.server.app.serviceLocator;

  //   // Treatment
  //   const users = await ListUsers(serviceLocator);

  //   // Output
  //   return users.map(serviceLocator.userSerializer.serialize)
  // },

  // async getUser(request: Request) {

  //   // Context
  //   const serviceLocator = request.server.app.serviceLocator;

  //   // Input
  //   const userId = request.params.id;

  //   // Treatment
  //   const user = await GetUser(userId, serviceLocator);

  //   // Output
  //   if (!user) {
  //     return Boom.notFound();
  //   }
  //   return serviceLocator.userSerializer.serialize(user);
  // },

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
