"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id = null, name, lastName, email, password) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
exports.default = User;
;
