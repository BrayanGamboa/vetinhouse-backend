import User from "./User";

export default class {

  persist(domainUser: User): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(userId: string): Promise<boolean> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  update(userId: string, fieldsUpdate: any): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
