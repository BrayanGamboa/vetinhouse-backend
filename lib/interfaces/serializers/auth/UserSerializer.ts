'use strict';

import User from "../../../domain/auth/user/User";

const _serializeSingleUser = (user: any) => {
  return {
    document: user.document,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    documentTypeId: user.documentTypeId,
    roleId: user.roleId,
    info: {
      createdAt: user.info?.created_at,
      updatedAt: user.info?.updated_at,
    }
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