import Boom from '@hapi/boom';
import ListRoleUsers from '../../../../application/use_cases/auth/role_user/ListRoleUsers';
import CreateRoleUser from '../../../../application/use_cases/auth/role_user/CreateRoleUser';
import GetUser from '../../../../application/use_cases/auth/role_user/GetRoleUser';
import DeleteUser from '../../../../application/use_cases/auth/role_user/DeleteRoleUser';

import { Request, ResponseToolkit } from "@hapi/hapi";

export default {

  async createRoleUser(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id, name, description} = request.payload as { id: number, name: string; description: string};

    // Treatment
    const roleUser = await CreateRoleUser(id, name, description, serviceLocator);

    // Output
    return serviceLocator.roleUserSerializer.serialize(roleUser);
  },

  async findRoleUsers(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const rolesUser = await ListRoleUsers(serviceLocator);

    // Output
    return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
  },

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
