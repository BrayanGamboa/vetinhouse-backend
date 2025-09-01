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
  async find(): Promise<RoleUser[]> {
    try {
      const seqRoleUsers = await mix_role.findAll();
      return seqRoleUsers.map((seqRoleUser: any) => new RoleUser(
        seqRoleUser.id,
        seqRoleUser.name,
        seqRoleUser.description,
        seqRoleUser.info
      ));
    } catch (err) {
      console.error(err);
      throw new Error('Error fetching role users');
    } 
  }
  async get(roleUserId: number): Promise<RoleUser> {
    try {
      const seqRoleUser = await mix_role.findByPk(roleUserId);
      
      let roleUser = new RoleUser();

      if (seqRoleUser != null) {
        roleUser = new RoleUser(
          seqRoleUser.id,
          seqRoleUser.name,
          seqRoleUser.description,
          seqRoleUser.info
        );
      }

      return roleUser;
    } catch (err) {
      console.error(err);
      throw new Error('Error fetching role user');
    }
  }

  async remove(roleUserId: number): Promise<RoleUser> {
    try {
      const seqRoleUser = await mix_role.findByPk(roleUserId);
      if (seqRoleUser == null) {
        throw new Error('Role user not found');
      }
      await seqRoleUser.destroy();
      return new RoleUser(
        seqRoleUser.id,
        seqRoleUser.name,
        seqRoleUser.description,
        seqRoleUser.info
      );
    } catch (err) {
      console.error(err);
      throw new Error('Error deleting role user');
    }
  }

}