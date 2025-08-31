import User from '../../../../domain/auth/user/User';
import UserRepository from '../../../../domain/auth/user/UserRepository';
export default (
  document: string,
  name: string,
  lastName: string,
  email: string,
  password: string,
  roleId: number,
  documentTypeId: number,
  { userRepository }: { userRepository: UserRepository }
) => {
  const user = new User(document, name, lastName, email, password, documentTypeId, roleId, {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  return userRepository.persist(user);
};
