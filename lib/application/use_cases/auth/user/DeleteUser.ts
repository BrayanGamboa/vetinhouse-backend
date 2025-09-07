import Boom from '@hapi/boom';
import UserRepository from '../../../../domain/auth/user/UserRepository';

export default async (document: string, { userRepository }: { userRepository: UserRepository }) => {
  if(!(await userRepository.getByFilter({ document })))
    throw Boom.notFound('User not found');
  return await userRepository.remove(document);
};
