import Boom from '@hapi/boom';
import ListRoleUsers from '../../../../application/use_cases/auth/role_user/ListRoleUsers';
import CreateRoleUser from '../../../../application/use_cases/auth/role_user/CreateRoleUser';
import UpdateRoleUser from '../../../../application/use_cases/auth/role_user/UpdateRoleUser';
import GetRoleUser from '../../../../application/use_cases/auth/role_user/GetRoleUser';
import DeleteRoleUser from '../../../../application/use_cases/auth/role_user/DeleteRoleUser';
import { Request, ResponseToolkit } from "@hapi/hapi";
import { CODE_RETURN_SUCCESS } from '../../../../infrastructure/config/constants';

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

  async updateRoleUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const roleUserId = request.params.id;
      const fields = request.payload;

      // Treatment
      await UpdateRoleUser(roleUserId, fields, serviceLocator);

      // Output
      return h.response().code(CODE_RETURN_SUCCESS);
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
      return rolaUser ? serviceLocator.roleUserSerializer.serialize(rolaUser) : Boom.notFound();
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - getRoleUser');
    }
  },

  async deleteRoleUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const userId = request.params.id;

      // Treatment
      await DeleteRoleUser(userId, serviceLocator);

      // Output
      return h.response().code(CODE_RETURN_SUCCESS);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err)) {
        return h.response(err.output.payload).code(err.output.statusCode);
      }
      throw Boom.badImplementation('An internal server error occurred - getRoleUser');
    }
  },

};
