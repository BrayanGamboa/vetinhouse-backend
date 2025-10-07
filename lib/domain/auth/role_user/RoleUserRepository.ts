/* eslint-disable @typescript-eslint/no-unused-vars */
import RoleUser from "./RoleUser";
import Boom from "@hapi/boom";

export default class {

  persist(domainRoleUser: RoleUser): Promise<RoleUser> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  update(roleUserId: number, fields: any): Promise<RoleUser> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainRoleUser: RoleUser): Promise<RoleUser> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(roleUserId: number): Promise<RoleUser> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find():Promise<RoleUser[]> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
