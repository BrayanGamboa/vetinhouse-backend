import User from "../../../../domain/auth/user/User";
import UserRepository from '../../../../domain/auth/user/UserRepository';

export default async (document: string, { userRepository }: { userRepository: UserRepository }): Promise<any> => {
  return await userRepository.getByFilter({document});
};
