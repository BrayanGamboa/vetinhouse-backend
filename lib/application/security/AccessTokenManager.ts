import JwtAccessTokenManager from "../../infrastructure/security/JwtAccessTokenManager";

export default class {

  generate(uid: { uid: string | null }) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  decode(accessToken: string): Promise<JwtAccessTokenManager> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};