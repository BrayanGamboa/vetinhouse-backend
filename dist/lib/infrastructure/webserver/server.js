"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const inert_1 = __importDefault(require("@hapi/inert"));
const vision_1 = __importDefault(require("@hapi/vision"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
const package_json_1 = __importDefault(require("../../../package.json"));
const service_locator_1 = require("../../infrastructure/config/service-locator");
const Good = require('@hapi/good');
const Blipp = require('blipp');
const createServer = async () => {
    const server = hapi_1.default.server({
        port: process.env.PORT || 3000
    });
    await server.register([
        Blipp,
        inert_1.default,
        vision_1.default,
        {
            plugin: hapi_swagger_1.default,
            options: {
                info: {
                    title: 'Test API Documentation',
                    version: package_json_1.default.version,
                },
            }
        },
        {
            plugin: Good,
            options: {
                ops: { interval: 1000 * 60 },
                reporters: {
                    myConsoleReporter: [
                        {
                            module: '@hapi/good-squeeze',
                            name: 'Squeeze',
                            args: [{ ops: '*', log: '*', error: '*', response: '*' }]
                        },
                        { module: '@hapi/good-console' },
                        'stdout'
                    ]
                }
            },
        },
    ]);
    await server.register([
        require('../../interfaces/routes/hello'),
        require('../../interfaces/routes/users'),
    ]);
    server.app.serviceLocator = (0, service_locator_1.buildBeans)();
    return server;
};
exports.default = createServer;
