import UserRepository from "../../domain/auth/user/UserRepository";
import AccessTokenManager from "../security/AccessTokenManager";

export default async (email: string, password: string, { userRepository, accessTokenManager }: { userRepository: UserRepository, accessTokenManager: AccessTokenManager }) => {
  const user = await userRepository.getByEmail(email);

  if (!user || user.password !== password) {
    throw new Error('Bad credentials');
  }

  return accessTokenManager.generate({ uid: user.id });
};
