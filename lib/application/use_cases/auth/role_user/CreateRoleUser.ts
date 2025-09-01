import RoleUser from '../../../../domain/auth/role_user/RoleUser';
import RoleUserRepository from '../../../../domain/auth/role_user/RoleUserRepository';

export default async (
  id: number,
  name: string,
  description: string,
  { roleUserRepository }: { roleUserRepository: RoleUserRepository }
) => {

  if(((await roleUserRepository.get(id)).info) != null) {
    return 403;
  }

  const roleUser = new RoleUser(id, name, description, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return await roleUserRepository.persist(roleUser);
};
