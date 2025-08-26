import AccessTokenManager from "../security/AccessTokenManager";

export default (accessToken: string, { accessTokenManager }: { accessTokenManager: AccessTokenManager}) => {
  const decoded = accessTokenManager.decode(accessToken);
  if (!decoded) {
    throw new Error('Invalid access token');
  }
  return { uid: decoded.uid };
};
