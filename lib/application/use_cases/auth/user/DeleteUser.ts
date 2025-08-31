import UserRepository from '../../../../domain/auth/user/UserRepository';

export default (userId: string, { userRepository }: { userRepository: UserRepository }) => {
  return userRepository.remove(userId);
};
