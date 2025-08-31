import User from "../../../../domain/auth/user/User";
import UserRepository from "../../../../domain/auth/user/UserRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { auth_user } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions'


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
      throw new Error('Error creating user');
    }
  }


}