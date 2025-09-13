import RoleUser from "../../../../domain/auth/role_user/RoleUser";
import RoleUserRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { mix_role } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions'
import Boom from "@hapi/boom";

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
      throw Boom.badImplementation('Error - role user repository - persist');
    }
  }

  async update(roleUserId: number, fieldsUpdate: any): Promise<RoleUser> {
    try {
      const [seqRoleUserBefore] = await this.getByFilter({ id: roleUserId });
      if (!seqRoleUserBefore) throw Boom.notFound('User not found');

      fieldsUpdate = {
        ...seqRoleUserBefore,
        ...fieldsUpdate
      }
      fieldsUpdate.info = {
        ...seqRoleUserBefore.info,
        updated_at: new Date().toISOString()
      }

      fieldsUpdate = convertCamelToSnakeCase(fieldsUpdate);

      return await mix_role.update(fieldsUpdate, {
        where: { id: roleUserId }
      });
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - role user repository - update');
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
      throw Boom.badImplementation('Error - role users repository - find');
    }
  }

  async getByFilter(filter: any): Promise<any> {
    try {
      filter = convertCamelToSnakeCase(filter);

      const seqRoleUser = await mix_role.findAll({
        where: filter
      });
      if (seqRoleUser.length > 0) {
        return seqRoleUser.map((seqRoleUser: any) => new RoleUser(
          seqRoleUser.id,
          seqRoleUser.name,
          seqRoleUser.description,
          seqRoleUser.info)
        )
      };
      return;
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - role user repository - getByFilter');
    }
  }

  async remove(roleUserId: number): Promise<RoleUser> {
    try {
      const seqRoleUser = await mix_role.findByPk(roleUserId);
      if (!seqRoleUser)
        return seqRoleUser

      return await seqRoleUser.destroy();
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - role user repository - remove');
    }
  }

}