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
      throw Boom.badImplementation('Error creating user');
    }
  }

  async getByFilter(filter: any): Promise<User> {
    const snakeFilter = convertCamelToSnakeCase(filter);

    // 👇 Sequelize espera un objeto "where", no el string directo
    const seqUser = await auth_user.findOne({
      where: snakeFilter,
    });

    let user = new User();
    if (seqUser != null) {
      user = new User(
        seqUser.document,
        seqUser.name,
        seqUser.lastName,
        seqUser.email,
        seqUser.password,
        seqUser.document_type_id,
        seqUser.role_id,
        seqUser.info
      );
    }
    return user;

  }

  async find(): Promise<User[]> {
    try {
      const seqUser = await auth_user.findAll();
      return seqUser.map((seqUser: any) => new User(
        seqUser.document,
        seqUser.name,
        seqUser.lastName,
        seqUser.email,
        seqUser.password,
        seqUser.documentType,
        seqUser.roleId,
        seqUser.info
      ))
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching users');
    }
  }

}