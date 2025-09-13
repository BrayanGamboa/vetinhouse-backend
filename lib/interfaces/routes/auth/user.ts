import { Server } from '@hapi/hapi';
import UsersController from '../../controllers/auth/user/UsersController';
import { UserPayloadSchema, UserListResponseSchema, UserResponseSchema } from '../../../application/schemas/auth/UserSchema';
import Joi from 'joi';

const pathBase = '/user';

export default {
  name: 'Users',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: pathBase,
        handler: UsersController.findUsers,
        options: {
          description: 'List all users',
          tags: ['api', 'Users'],
          response:{
            schema: UserListResponseSchema
          }
        },
      },
      {
        method: 'POST',
        path: pathBase,
        handler: UsersController.createUser,
        options: {
          description: 'Create a user',
          tags: ['api', 'Users'],
          validate: {
            payload: UserPayloadSchema
          },
          response: {
            schema: UserResponseSchema
          }
        },
      },
      {
        method: 'PATCH',
        path: `${pathBase}/{id}`,
        handler: UsersController.updateUser,
        options: {
          description: 'Update user',
          tags: ['api', 'Users'],
          validate: {
            params: Joi.object({
              id: Joi.string().required().description('The id of the user')
            })
          }
        },
      },
      {
        method: 'GET',
        path: `${pathBase}/{id}`,
        handler: UsersController.getUserById,
        options: {
          description: 'Get a user by its {id}',
          tags: ['api'],
          response:{
            schema: UserListResponseSchema
          },
          validate: {
            params: Joi.object({
              id: Joi.string().required().description('The id of the user')
            })
          },
        },
      },
      {
        method: 'DELETE',
        path: `${pathBase}/{id}`,
        handler: UsersController.deleteUser,
        options: {
          description: 'Delete a user',
          tags: ['api'],
          response:{
            emptyStatusCode: 204
          },
          validate: {
            params: Joi.object({
              id: Joi.string().required().description('The id of the user')
            })
          },
        },
      },
      {
        method: 'POST',
        path: `${pathBase}/login`,
        handler: UsersController.login,
        options: {
          description: 'Login a user',
          tags: ['api'],
          response: {
            emptyStatusCode: 200,
            disconnectStatusCode: 401,
          },
          validate: {
            payload: Joi.object({
              email: Joi.string().email().required().example("test@gmail.com"),
              password: Joi.string().required().example('password123')
            })
          }
        },
      },
    ]);
  }
};