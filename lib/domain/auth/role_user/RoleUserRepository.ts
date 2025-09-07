import RoleUser from "./RoleUser";

export default class {

  persist(domainRoleUser: RoleUser): Promise<RoleUser> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainRoleUser: RoleUser): Promise<RoleUser> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(roleUserId: number): Promise<RoleUser> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find():Promise<RoleUser[]> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
