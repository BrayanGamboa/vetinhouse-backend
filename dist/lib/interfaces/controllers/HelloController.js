"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SayHello_1 = __importDefault(require("../../application/use_cases/SayHello"));
exports.default = {
    sayHelloWorld() {
        return (0, SayHello_1.default)();
    },
    sayHelloPerson(request) {
        return (0, SayHello_1.default)(request.params.name);
    },
};
