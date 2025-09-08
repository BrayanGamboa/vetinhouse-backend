import Boom from '@hapi/boom';
import { Request, ResponseToolkit } from "@hapi/hapi";
import GetAccessToken from '../../application/use_cases/GetAccessToken';
import VerifyAccessToken from '../../application/use_cases/VerifyAccessToken';

export default {

  async getAccessToken(request: Request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { grant_type: grantType, username: email, password } = request.payload as { grant_type: string, username: string; password: string};

    if (!grantType || grantType !== 'password') {
      return Boom.badRequest('Invalid authentication strategy');
    }

    // Treatment
    try {
      const accessToken = await GetAccessToken(email, password, serviceLocator);

      // Output
      return accessToken;
    } catch (err) {
      console.error(err);
      return Boom.unauthorized('Bad credentials');
    }
  },

  verifyAccessToken(request: Request, h: ResponseToolkit) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    // Treatment
    try {
      const { uid } = VerifyAccessToken(accessToken, serviceLocator);

      // Output
      return h.authenticated({
        credentials: { uid },
        artifacts: { accessToken: accessToken }
      });
    } catch (err) {
      console.error(err);
      return Boom.unauthorized('Bad credentials');
    }
  },

};