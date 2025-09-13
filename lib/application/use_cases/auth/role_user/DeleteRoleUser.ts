import RoleUserRepository from '../../../../domain/auth/role_user/RoleUserRepository';
import UserRepository from '../../../../domain/auth/user/UserRepository';
import Boom from '@hapi/boom';

export default async (roleUserId: number, { roleUserRepository, userRepository }: { roleUserRepository: RoleUserRepository, userRepository: UserRepository }) => {

  if(!(await roleUserRepository.getByFilter({ id: roleUserId })))
    throw Boom.notFound("Role user not found");

  if (await userRepository.getByFilter({ roleId: roleUserId }))
    throw Boom.forbidden("Cannot delete role user because it is assigned to one or more users");

  return await roleUserRepository.remove(roleUserId);
};
