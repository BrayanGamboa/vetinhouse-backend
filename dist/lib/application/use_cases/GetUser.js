"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (userId, { userRepository }) => {
    return userRepository.get(userId);
};
