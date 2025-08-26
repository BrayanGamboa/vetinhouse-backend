"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
exports.default = {
    name: 'users',
    version: '1.0.0',
    register: async (server) => {
        server.route([
            {
                method: 'GET',
                path: '/users',
                handler: UsersController_1.default.findUsers,
                options: {
                    description: 'List all users',
                    tags: ['api'],
                },
            },
            {
                method: 'POST',
                path: '/users',
                handler: UsersController_1.default.createUser,
                options: {
                    description: 'Create a user',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/users/{id}',
                handler: UsersController_1.default.getUser,
                options: {
                    description: 'Get a user by its {id}',
                    tags: ['api'],
                },
            },
            {
                method: 'DELETE',
                path: '/users/{id}',
                handler: UsersController_1.default.deleteUser,
                options: {
                    description: 'Delete a user',
                    tags: ['api'],
                },
            },
        ]);
    }
};
