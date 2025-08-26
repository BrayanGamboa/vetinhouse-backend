"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("./constants"));
/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
exports.default = (() => {
    const environment = {
        uri: process.env.DATABASE_URI || '',
        dialect: process.env.DATABASE_DIALECT || constants_1.default.SUPPORTED_DATABASE.MONGO,
    };
    if (process.env.NODE_ENV === 'test') {
        environment.uri = '',
            environment.dialect = constants_1.default.SUPPORTED_DATABASE.SQLITE || '';
    }
    return environment;
})();
