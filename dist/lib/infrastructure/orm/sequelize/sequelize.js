"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const environment_1 = __importDefault(require("../../config/environment"));
const User_1 = require("./models/User");
const sequelize = new sequelize_1.Sequelize(environment_1.default.uri, {
    dialect: environment_1.default.dialect,
});
// Inicializar modelos
(0, User_1.initUserModel)(sequelize);
exports.default = sequelize;
