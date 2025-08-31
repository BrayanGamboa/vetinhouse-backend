import RoleUserRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import RoleUser from "../../../../domain/auth/role_user/RoleUser";

export default ({ roleUserRepository }: { roleUserRepository: RoleUserRepository }): Promise<RoleUser[]> => {
  return roleUserRepository.find();
};
