'use strict';

import RoleUser from "../../../domain/auth/role_user/RoleUser";

const _serializeSingleRoleUser = (roleUser: RoleUser) => {
  return {
    'id': roleUser.id,
    'name': roleUser.name,
    'description': roleUser.description,
    'info': roleUser.info
  };
};

export default class {

  serialize(data: RoleUser) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleRoleUser);
    }
    return _serializeSingleRoleUser(data);
  }

};