"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../domain/user/User"));
exports.default = (name, lastName, email, password, { userRepository }) => {
    const user = new User_1.default(null, name, lastName, email, password);
    return userRepository.persist(user);
};
