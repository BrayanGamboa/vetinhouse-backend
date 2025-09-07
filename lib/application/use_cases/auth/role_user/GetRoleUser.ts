import RoleUser from "../../../../domain/auth/role_user/RoleUser";
import RoleUserRepository from "../../../../domain/auth/role_user/RoleUserRepository";

export default async (id: number, { roleUserRepository }: { roleUserRepository: RoleUserRepository }): Promise<RoleUser> => {
  return await roleUserRepository.getByFilter({id});
};