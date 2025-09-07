import UserRepository from '../../../../domain/auth/user/UserRepository';

export default async (email: string, password: string, { userRepository }: { userRepository: UserRepository }): Promise<any> => {
  return await userRepository.getByFilter({email, password});
};
