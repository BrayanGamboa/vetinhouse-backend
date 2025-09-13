import RoleUser from "../../../../domain/auth/role_user/RoleUser";
import RoleUserRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import Boom from "@hapi/boom";

export default async (id: number, fieldsUpdate: any, { roleUserRepository }: { roleUserRepository: RoleUserRepository }): Promise<RoleUser> => {
  if (fieldsUpdate?.id) {
    if (await roleUserRepository.getByFilter({ id: fieldsUpdate.id }))
      throw Boom.forbidden("Role user id already in use");
  }
  
  if(fieldsUpdate?.name) {
    if (await roleUserRepository.getByFilter({ name: fieldsUpdate.name}))
      throw Boom.forbidden("Role user name already in use");
  }

  return await roleUserRepository.update(id, fieldsUpdate);
};