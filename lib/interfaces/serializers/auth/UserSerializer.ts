'use strict';

import User from "../../../domain/auth/user/User";

const _serializeSingleUser = (user: User) => {
  return {
    'document': user.document,
    'name': user.name,
    'last-name': user.lastName,
    'email': user.email,
    'password': user.password,
    'document-type-id': user.documentTypeId,
    'role-id': user.roleId,
    'info': user.info
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