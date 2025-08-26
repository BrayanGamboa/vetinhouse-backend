import User from "../../domain/user/User";
import UserRepository from "../../domain/user/UserRepository";

export default class InMemoryUserRepository extends UserRepository {
  private index: number;
  private data: Record<string, User>;

  constructor() {
    super();
    this.index = 1;
    this.data = {};
    this._initializeRepositoryWithTwoUsers();
  }

  private _initializeRepositoryWithTwoUsers() {
    [
      new User(null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234'),
      new User(null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678')
    ].forEach(user => this.persist(user));
  }

  private _dataAsArray(): User[] {
    return Object.values(this.data);
  }

  persist(userEntity: User): Promise<User> {
    const rowId = this.index++;
    const row: User = { ...userEntity, id: rowId.toString() };
    this.data[rowId] = row;
    return Promise.resolve(row);
  }

  merge(userEntity: User): Promise<User> {
    const row = this.data[userEntity.id as string];
    if (!row) return Promise.reject(new Error("User not found"));
    Object.assign(row, userEntity);
    return Promise.resolve(row);
  }

  remove(userId: string): Promise<User> {
    const user = this.data[userId];
    if (!user) return Promise.reject(new Error("User not found"));
    delete this.data[userId];
    return Promise.resolve(user);
  }

  get(userId: string): Promise<User> {
    const user = this.data[userId];
    if (!user) return Promise.reject(new Error("User not found"));
    return Promise.resolve(user);
  }

  getByEmail(userEmail: string): Promise<User> {
    const user = this._dataAsArray().find(user => user.email === userEmail);
    if (!user) return Promise.reject(new Error("User not found"));
    return Promise.resolve(user);
  }

  find(): Promise<User[]> {
    return Promise.resolve(this._dataAsArray());
  }
}
