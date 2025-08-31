import RoleUser from '../../../../domain/auth/role_user/RoleUser';
import RoleUserRepository from '../../../../domain/auth/role_user/RoleUserRepository';
export default (
  id: number,
  name: string,
  description: string,
  { roleUserRepository }: { roleUserRepository: RoleUserRepository }
) => {
  const roleUser = new RoleUser(id, name, description, {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  return roleUserRepository.persist(roleUser);
};
