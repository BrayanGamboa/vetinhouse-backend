"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBeans = buildBeans;
// lib/infrastructure/config/service-locator.ts
const constants_1 = __importDefault(require("./constants"));
const environment_1 = __importDefault(require("./environment"));
const JwtAccessTokenManager_1 = __importDefault(require("../security/JwtAccessTokenManager"));
const UserSerializer_1 = __importDefault(require("../../interfaces/serializers/UserSerializer"));
const UserRepositoryInMemory_1 = __importDefault(require("../repositories/UserRepositoryInMemory"));
const UserRepositoryMongo_1 = __importDefault(require("../repositories/UserRepositoryMongo"));
const UserRepositorySQLite_1 = __importDefault(require("../repositories/UserRepositorySQLite"));
function buildBeans() {
    const beans = {
        accessTokenManager: new JwtAccessTokenManager_1.default(),
        userSerializer: new UserSerializer_1.default(),
        userRepository: {}
    };
    switch (environment_1.default.database.dialect) {
        case constants_1.default.SUPPORTED_DATABASE.IN_MEMORY:
            beans.userRepository = new UserRepositoryInMemory_1.default();
            break;
        case constants_1.default.SUPPORTED_DATABASE.MONGO:
            beans.userRepository = new UserRepositoryMongo_1.default();
            break;
        case constants_1.default.SUPPORTED_DATABASE.POSTGRES:
            throw new Error('Add PostgreSQL support');
        default:
            beans.userRepository = new UserRepositorySQLite_1.default();
    }
    return beans;
}
