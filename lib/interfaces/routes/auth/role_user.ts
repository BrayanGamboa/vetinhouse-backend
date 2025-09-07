import { Server } from '@hapi/hapi';
import RoleUsersController from '../../controllers/auth/role_user/RoleUsersController';
import { RoleUserPayloadSchema, RoleUserListResponseSchema, RoleUserResponseSchema } from '../../../application/schemas/auth/RoleUser';
import Joi from 'joi';

const pathBase = '/role_user';

export default {
  name: 'Role user',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: pathBase,
        handler: RoleUsersController.findRoleUsers,
        options: {
          description: 'List all users',
          tags: ['api', 'Role user'],
          // response: {
          //   schema: RoleUserListResponseSchema
          // }
        },
      },
      {
        method: 'POST',
        path: pathBase,
        handler: RoleUsersController.createRoleUser,
        options: {
          description: 'Create a role user',
          tags: ['api', 'Role user'],
          validate: {
            payload: RoleUserPayloadSchema
          },
          // response: {
          //   schema: RoleUserResponseSchema
          // }
        },
      },
      {
        method: 'GET',
        path: `${pathBase}/{id}`,
        handler: RoleUsersController.getRoleUser,
        options: {
          description: 'Get a role user by id',
          tags: ['api', 'Role user'],
          // response: {
          //   schema: RoleUserResponseSchema
          // },
          validate: {
            params: Joi.object({
              id: Joi.number().required().description('The id of the user')
            })
          },
        },
      },
      // {
      //   method: 'DELETE',
      //   path: `${pathBase}/{id}`,
      //   handler: UsersController.deleteUser,
      //   options: {
      //     description: 'Delete a user',
      //     tags: ['api'],
      //   },
      // },
    ]);
  }
};