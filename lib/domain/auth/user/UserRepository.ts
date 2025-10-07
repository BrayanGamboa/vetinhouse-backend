/* eslint-disable @typescript-eslint/no-unused-vars */
import User from "./User";
import Boom from "@hapi/boom";

export default class {
  
  persist(domainUser: User): Promise<User> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(userId: string): Promise<boolean> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  update(userId: string, fieldsUpdate: any): Promise<User> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
