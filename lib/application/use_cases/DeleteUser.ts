import UserRepository from '../../domain/user/UserRepository';

export default (userId: string, { userRepository }: { userRepository: UserRepository}) => {
  return userRepository.remove(userId);
};
