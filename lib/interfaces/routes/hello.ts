import { Server } from "@hapi/hapi";
import HelloController from "../controllers/HelloController";

export default {
  name: 'hello',
  version: '1.0.0',
  register: async (server: Server) => {
    server.route([
      {
        method: 'GET',
        path: '/hello',
        handler: HelloController.sayHelloWorld,
        options: {
          description: 'Return "Hello world!"',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/hello/{name}',
        handler: HelloController.sayHelloPerson,
        options: {
          description: 'Return "Hello {name}!"',
          tags: ['api'],
        },
      }
    ]);
  }
};