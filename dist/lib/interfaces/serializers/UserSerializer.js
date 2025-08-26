'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const _serializeSingleUser = (user) => {
    return {
        'id': user.id,
        'first-name': user.firstName,
        'last-name': user.lastName,
        'email': user.email,
    };
};
class default_1 {
    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
}
exports.default = default_1;
;
