"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const food_controller_1 = require("./controller/food.controller");
const Error_handler_1 = require("./handlers/Error.handler");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.useMiddleware();
        this.useRoutes();
    }
    useMiddleware() {
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json({ limit: '10mb' }));
    }
    useRoutes() {
        this.app.use('/', food_controller_1.foodController.router);
        Error_handler_1.ErrorHandlers.error(this.app);
        Error_handler_1.ErrorHandlers.routerError(this.app);
    }
}
exports.app = new App();
