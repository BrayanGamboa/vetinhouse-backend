import { Server } from '@hapi/hapi';
import RoleUsersController from '../../controllers/auth//role_user/RoleUsersController';

const pathBase = '/role_user';

export default {
  name: 'Role user',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: `${pathBase}`,
        handler: RoleUsersController.findRoleUsers,
        options: {
          description: 'List all users',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: `${pathBase}`,
        handler: RoleUsersController.createRoleUser,
        options: {
          description: 'Create a role user',
          tags: ['api'],
        },
      },
      // {
      //   method: 'GET',
      //   path: `${pathBase}/{id}`,
      //   handler: UsersController.getUser,
      //   options: {
      //     description: 'Get a user by its {id}',
      //     tags: ['api'],
      //   },
      // },
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