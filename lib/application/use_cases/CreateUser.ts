import User from '../../domain/user/User';
import UserRepository from '../../domain/user/UserRepository';
export default (
  name: string,
  lastName: string,
  email: string,
  password: string,
  { userRepository }: { userRepository: UserRepository }
) => {
  const user = new User(null, name, lastName, email, password);
  return userRepository.persist(user);
};
