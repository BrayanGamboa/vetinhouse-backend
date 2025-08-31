import RoleUser from "../../../../domain/auth/role_user/RoleUser";
import RoleUserRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { mix_role } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions'

export default class extends RoleUserRepository {
  async persist(domain_role_user: RoleUser) {
    try {
      const roleUser: any = convertCamelToSnakeCase(domain_role_user);
      const { id, name, description, info } = roleUser;

      const seqCreateRoleUser = await mix_role.create({
        id,
        name,
        description,
        info
      });

      return new RoleUser(
        seqCreateRoleUser.id,
        seqCreateRoleUser.name,
        seqCreateRoleUser.description,
        seqCreateRoleUser.info
      );
    } catch (err) {
      console.error(err);
      throw new Error('Error creating user');
    }
  }
}