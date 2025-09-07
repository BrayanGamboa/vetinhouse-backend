import { Server } from "@hapi/hapi";
import HelloController from "../controllers/HelloController";
import Joi from "joi";

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
          validate: {
            params: Joi.object({
              name: Joi.string().required().description('Name to say hello to')
            })
          },
        },
      }
    ]);
  }
};