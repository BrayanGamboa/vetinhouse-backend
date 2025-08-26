import UserRepository from "../../domain/user/UserRepository";
import User from "../../domain/user/User";

export default ({ userRepository }: { userRepository: UserRepository }): Promise<User[]> => {
  return userRepository.find();
};
