import User from "../../../../domain/auth/user/User";
import UserRepository from "../../../../domain/auth/user/UserRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { auth_user } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions';
import Boom from '@hapi/boom';

export default class extends UserRepository {
  async persist(domain_user: User) {
    try {
      const user: any = convertCamelToSnakeCase(domain_user);
      const { document, name, last_name, email, password, document_type_id, role_id, info } = user;

      const seqCreateUser = await auth_user.create({
        document,
        name,
        last_name,
        email,
        password,
        document_type_id,
        role_id,
        info
      });

      return new User(
        seqCreateUser.document,
        seqCreateUser.name,
        seqCreateUser.last_name,
        seqCreateUser.email,
        seqCreateUser.password,
        seqCreateUser.document_type_id,
        seqCreateUser.role_id,
        seqCreateUser.info
      );
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - creating user - persist');
    }
  }

  async update(userId: string, fieldsUpdate: any): Promise<User> {
    try {
      const [seqUserBefore] = await this.getByFilter({ document: userId });
      if (!seqUserBefore) throw Boom.notFound();

      fieldsUpdate = {
        ...seqUserBefore,
        ...fieldsUpdate
      }

      fieldsUpdate.info = {
        ...seqUserBefore.info,
        updated_at: new Date().toISOString()
      };

      fieldsUpdate = convertCamelToSnakeCase(fieldsUpdate);

      return await auth_user.update(fieldsUpdate, {
        where: { document: userId }
      });
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - user repository - update');
    }
  }

  async getByFilter(filter: any): Promise<any> {
    try {

      filter = convertCamelToSnakeCase(filter);
      const seqUser = await auth_user.findAll({
        where: filter
      });      

      if (seqUser.length > 0) {        
        return seqUser.map((seqUser: any) => new User(
          seqUser.document,
          seqUser.name,
          seqUser.lastName,
          seqUser.email,
          seqUser.password,
          seqUser.document_type_id,
          seqUser.role_id,
          seqUser.info)
        );
      }
      
      return;
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - user repository - getByFilter');
    }
  }

  async remove(userId: string): Promise<boolean> {
    try {
      const seqUser = await auth_user.findByPk(userId);
      return await seqUser.destroy(seqUser);
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - user repository - remove');
    }
  }

}