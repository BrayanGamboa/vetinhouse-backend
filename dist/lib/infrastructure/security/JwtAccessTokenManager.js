'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const AccessTokenManager = require('../../application/security/AccessTokenManager');
const JWT_SECRET_KEY = 'shhhhhh!';
class default_1 extends AccessTokenManager {
    generate(payload) {
        return jwt.sign(payload, JWT_SECRET_KEY);
    }
    decode(accessToken) {
        return jwt.verify(accessToken, JWT_SECRET_KEY);
    }
}
exports.default = default_1;
;
