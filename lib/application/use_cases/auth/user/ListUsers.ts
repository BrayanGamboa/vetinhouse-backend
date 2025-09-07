import User from "../../../../domain/auth/user/User";
import UserRepository from '../../../../domain/auth/user/UserRepository';

export default async ({ userRepository }: { userRepository: UserRepository }): Promise<User[]> => {
  return await userRepository.getByFilter({});
};
