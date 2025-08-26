'use strict';

import User from "../../domain/user/User";

const _serializeSingleUser = (user: User) => {
  return {
    'id': user.id,
    'name': user.name,
    'last-name': user.lastName,
    'email': user.email,
  };
};

export default class {

  serialize(data: User) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }

};