import User from "./User";

export default class {

  persist(domainUser: User) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainUser: User): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(userId: string): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(userId: string): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByEmail(email: string): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find():Promise<User[]> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
