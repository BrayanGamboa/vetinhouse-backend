'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const AuthorizationController = require('../../../interfaces/controllers/AuthorizationController');
exports.default = () => {
    return {
        authenticate: AuthorizationController.verifyAccessToken
    };
};
