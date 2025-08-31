import { Server } from '@hapi/hapi';
import UsersController from '../../controllers/auth/user/UsersController';

const pathBase = '/user';

export default {
  name: 'Users',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      // {
      //   method: 'GET',
      //   path: '/users',
      //   handler: UsersController.findUsers,
      //   options: {
      //     description: 'List all users',
      //     tags: ['api'],
      //   },
      // },
      {
        method: 'POST',
        path: `${pathBase}`,
        handler: UsersController.createUser,
        options: {
          description: 'Create a user',
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