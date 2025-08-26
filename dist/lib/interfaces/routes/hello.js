"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelloController_1 = __importDefault(require("../controllers/HelloController"));
exports.default = {
    name: 'hello',
    version: '1.0.0',
    register: async (server) => {
        server.route([
            {
                method: 'GET',
                path: '/hello',
                handler: HelloController_1.default.sayHelloWorld,
                options: {
                    description: 'Return "Hello world!"',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/hello/{name}',
                handler: HelloController_1.default.sayHelloPerson,
                options: {
                    description: 'Return "Hello {name}!"',
                    tags: ['api'],
                },
            }
        ]);
    }
};
