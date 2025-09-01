import User from "./User";

export default class {

  persist(domainUser: User): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainUser: User): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(userId: string): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find():Promise<User[]> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
