'use strict';

import User from "../../domain/user/User";
import MongooseUser from '../orm/mongoose/schemas/User';

const UserRepository = require('../../domain/UserRepository');

export default class extends UserRepository {

  constructor() {
    super();
  }

  async persist(userEntity: User) {
    const { name, lastName, email, password } = userEntity;
    const mongooseUser = await new MongooseUser({ name, lastName, email, password });
    await mongooseUser.save();
    return new User(mongooseUser.id, mongooseUser.name, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async merge(userEntity: User) {
    const { id, name, lastName, email, password } = userEntity;
    const mongooseUser = await MongooseUser.findByIdAndUpdate(id, { name, lastName, email, password });
    return new User(mongooseUser.id, mongooseUser.name, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async remove(userRemove: User) {
    return MongooseUser.findOneAndDelete(userRemove);
  }

  async get(userId: User) {
    const mongooseUser = await MongooseUser.findById(userId);
    return new User(mongooseUser.id, mongooseUser.name, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async getByEmail(userEmail: string) {
    const mongooseUser = await MongooseUser.find({ email: userEmail });
    return new User(mongooseUser.id, mongooseUser.name, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
  }

  async find() {
    const mongooseUsers = await MongooseUser.find();
    return mongooseUsers.map((mongooseUser) => {
      return new User(mongooseUser.id, mongooseUser.name, mongooseUser.lastName, mongooseUser.email, mongooseUser.password);
    });
  }

};
