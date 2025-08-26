"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("@hapi/boom"));
const ListUsers_1 = __importDefault(require("../../application/use_cases/ListUsers"));
const CreateUser_1 = __importDefault(require("../../application/use_cases/CreateUser"));
const GetUser_1 = __importDefault(require("../../application/use_cases/GetUser"));
const DeleteUser_1 = __importDefault(require("../../application/use_cases/DeleteUser"));
exports.default = {
    async createUser(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;
        // Input
        const { firstName, lastName, email, password } = request.payload;
        // Treatment
        const user = await (0, CreateUser_1.default)(firstName, lastName, email, password, serviceLocator);
        // Output
        return serviceLocator.userSerializer.serialize(user);
    },
    async findUsers(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;
        // Treatment
        const users = await (0, ListUsers_1.default)(serviceLocator);
        // Output
        return users.map(serviceLocator.userSerializer.serialize);
    },
    async getUser(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;
        // Input
        const userId = request.params.id;
        // Treatment
        const user = await (0, GetUser_1.default)(userId, serviceLocator);
        // Output
        if (!user) {
            return boom_1.default.notFound();
        }
        return serviceLocator.userSerializer.serialize(user);
    },
    async deleteUser(request, h) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;
        // Input
        const userId = request.params.id;
        // Treatment
        await (0, DeleteUser_1.default)(userId, serviceLocator);
        // Output
        return h.response().code(204);
    },
};
