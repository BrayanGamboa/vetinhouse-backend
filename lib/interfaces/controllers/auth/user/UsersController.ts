import Boom from '@hapi/boom';
import ListUsers from '../../../../application/use_cases/auth/user/ListUsers';
import CreateUser from '../../../../application/use_cases/auth/user/CreateUser';
import GetUser from '../../../../application/use_cases/auth/user/GetUser';
import DeleteUser from '../../../../application/use_cases/auth/user/DeleteUser';
import LoginUser from '../../../../application/use_cases/auth/user/LoginUser';

import { Request, ResponseToolkit } from "@hapi/hapi";
import { CODE_RETURN_SUCCESS } from '../../../../infrastructure/config/constants';

export default {

  async createUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const { document, name, lastName, email, password, roleId, documentTypeId } = request.payload as any;

      // Treatment
      const user = await CreateUser(document, name, lastName, email, password, roleId, documentTypeId, serviceLocator);

      // Output
      return serviceLocator.userSerializer.serialize(user);
    } catch (err) {
      console.error(err);
      
      if (Boom.isBoom(err))
        return h.response(err.output.payload).code(err.output.statusCode);

      return Boom.badImplementation("Unexpected error - createUser");
    }
  },

  async updateUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const fields = request.payload as any;
      const userId = request.params.id;

      // Treatment
      await serviceLocator.userRepository.update(userId, fields);

      // Output
      return h.response().code(CODE_RETURN_SUCCESS);
    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err))
        return h.response(err.output.payload).code(err.output.statusCode);

      return Boom.badImplementation("Unexpected error - updateUser");
    }
  },

  async findUsers(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Treatment
      const users = await ListUsers(serviceLocator);   

      // Output
      return users ? users.map(serviceLocator.userSerializer.serialize) : Boom.notFound();
    } catch (err) {
      console.error(err);

      if (Boom.isBoom(err))
        return h.response(err.output.payload).code(err.output.statusCode);

      throw Boom.badImplementation("Unexpected error - findUsers");
    }
  },

  async getUserById(request: Request, h: ResponseToolkit) {

    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const userId = request.params.id;

      // Treatment
      const user = await GetUser(userId, serviceLocator);
      
      // Output

      return user ? serviceLocator.userSerializer.serialize(user) : Boom.notFound();

    } catch (err) {
      console.error(err);
      if (Boom.isBoom(err))
        return h.response(err.output.payload).code(err.output.statusCode);
      
      throw Boom.badImplementation("Unexpected error - getUserById");
    }

  },

  async deleteUser(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const userId = request.params.id;

      // Treatment
      await DeleteUser(userId, serviceLocator);

      // Output
      return h.response().code(204);
    } catch (err) {
      console.error(err);

      if (Boom.isBoom(err))
        return h.response(err.output.payload).code(err.output.statusCode);
      
      throw Boom.badImplementation("Unexpected error - deleteUser");
    }
  },

  async login(request: Request, h: ResponseToolkit) {
    try {
      // Context
      const serviceLocator = request.server.app.serviceLocator;

      // Input
      const { email, password } = request.payload as any;
      
      // Treatment - Output
      if (!(await LoginUser(email, password, serviceLocator)))
        throw Boom.unauthorized();

      return h.response().code(CODE_RETURN_SUCCESS);

    } catch (err) {
      console.error(err);

      if (Boom.isBoom(err))
        return h.response(err.output.payload).code(err.output.statusCode);

      throw Boom.badImplementation("Unexpected error - login");
    }
  }
}
