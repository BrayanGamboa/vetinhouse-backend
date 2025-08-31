import User from "../../../../domain/auth/user/User";
import UserRepository from '../../../../domain/auth/user/UserRepository';

export default (userId: string, { userRepository }: { userRepository: UserRepository }): Promise<User> => {
  return userRepository.get(userId);
};
