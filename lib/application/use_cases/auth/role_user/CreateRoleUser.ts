import Boom from '@hapi/boom';
import RoleUser from '../../../../domain/auth/role_user/RoleUser';
import RoleUserRepository from '../../../../domain/auth/role_user/RoleUserRepository';

export default async (
  id: number,
  name: string,
  description: string,
  { roleUserRepository }: { roleUserRepository: RoleUserRepository }
) => {
  if(await roleUserRepository.getByFilter({ id }))
    throw Boom.forbidden("Role user with this ID already exists, please choose another");

  if (await roleUserRepository.getByFilter({ name }))
    throw Boom.forbidden("Role user with this name already exists, please choose another");
  
  const roleUser = new RoleUser(id, name, description, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return await roleUserRepository.persist(roleUser);
};
