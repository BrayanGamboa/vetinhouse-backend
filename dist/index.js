"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = __importDefault(require("./lib/infrastructure/config/bootstrap"));
const server_1 = __importDefault(require("./lib/infrastructure/webserver/server"));
// Start the server
const start = async () => {
    try {
        await bootstrap_1.default.init();
        const server = await (0, server_1.default)();
        await server.start();
        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};
start();
