"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const food_controller_1 = require("./Foods/food.controller");
const Error_handler_1 = require("./handlers/Error.handler");
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.useMiddleware();
        this.useRoutes();
    }
    static getInstance() {
        if (this.instance == null) {
            return new App();
        }
        return this.instance;
    }
    useMiddleware() {
        const app = this.app;
        app.use((0, helmet_1.default)());
        app.use((0, express_mongo_sanitize_1.default)());
        app.use(express_1.default.json({ limit: '20mb' }));
    }
    useRoutes() {
        const app = this.app;
        app.use('/', food_controller_1.foodController.controllerRouter);
        Error_handler_1.ErrorHandlers.error(app);
        Error_handler_1.ErrorHandlers.routerError(app);
    }
}
exports.app = App.getInstance().app;
