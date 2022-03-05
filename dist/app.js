"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const foodController_1 = require("./controller/foodController");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.useMiddleware();
        this.useRoutes();
    }
    useMiddleware() {
        this.app.use(express_1.default.json({ limit: '10mb' }));
    }
    useRoutes() {
        this.app.use('/', foodController_1.foodController.router);
    }
}
exports.app = new App();
