import User from "../../../../domain/auth/user/User";
import UserRepository from '../../../../domain/auth/user/UserRepository';


export default ({ userRepository }: { userRepository: UserRepository }): Promise<User[]> => {
  return userRepository.find();
};
