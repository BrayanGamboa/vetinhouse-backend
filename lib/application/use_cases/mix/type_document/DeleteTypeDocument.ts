import UserRepository from '../../../../domain/auth/user/UserRepository';

export default async (userId: string, { userRepository }: { userRepository: UserRepository}) => {
  return await userRepository.remove(userId);
};
