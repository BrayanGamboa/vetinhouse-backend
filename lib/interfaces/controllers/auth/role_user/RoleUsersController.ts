import Boom from '@hapi/boom';
import ListRoleUsers from '../../../../application/use_cases/auth/role_user/ListRoleUsers';
import CreateRoleUser from '../../../../application/use_cases/auth/role_user/CreateRoleUser';
import GetRoleUser from '../../../../application/use_cases/auth/role_user/GetRoleUser';
import DeleteUser from '../../../../application/use_cases/auth/role_user/DeleteRoleUser';

import { Request, ResponseToolkit } from "@hapi/hapi";

export default {
  async createRoleUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const { id, name, description } = request.payload as { id: number, name: string; description: string };

      // Treatment
      const roleUser = await CreateRoleUser(id, name, description, serviceLocator);

      // Output
      return serviceLocator.roleUserSerializer.serialize(roleUser);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - createRoleUser');
    }
  },

  async findRoleUsers(request: Request) {
    try {
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const rolesUser = await ListRoleUsers(serviceLocator);

      // Output
      return rolesUser.map(serviceLocator.roleUserSerializer.serialize);
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('An internal server error occurred - findRoleUsers');
    }
  },

  async getRoleUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const roleUserId = request.params.id;

      // Treatment
      const rolaUser = await GetRoleUser(roleUserId, serviceLocator);

      // Output
      return rolaUser ? serviceLocator.roleUserSerializer.serialize(rolaUser) : Boom.notFound('Role user not found');
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - getRoleUser');
    }
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
