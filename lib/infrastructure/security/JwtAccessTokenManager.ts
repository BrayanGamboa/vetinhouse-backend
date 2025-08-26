'use strict';

const jwt = require('jsonwebtoken');

import AccessTokenManager from '../../application/security/AccessTokenManager';

const JWT_SECRET_KEY = 'shhhhhh!';

export default class extends AccessTokenManager {

  generate(payload: object) {
    return jwt.sign(payload, JWT_SECRET_KEY);
  }

  decode(accessToken: string) {
    return jwt.verify(accessToken, JWT_SECRET_KEY);
  }

};