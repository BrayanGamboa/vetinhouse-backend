import RoleUserRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import RoleUser from "../../../../domain/auth/role_user/RoleUser";

export default async ({ roleUserRepository }: { roleUserRepository: RoleUserRepository }): Promise<RoleUser[]> => {
  return await roleUserRepository.find();
};
