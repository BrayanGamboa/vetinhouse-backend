import User from "../../domain/user/User";
import UserRepository from "../../domain/user/UserRepository";

export default (userId: string, { userRepository }: { userRepository: UserRepository}): Promise<User> => {
  return userRepository.get(userId);
};
