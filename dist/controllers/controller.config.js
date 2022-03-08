"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class BaseController {
    constructor(baseRoute) {
        this.app = (0, express_1.default)();
        this.router = express_1.default.Router();
        this.baseRoute = baseRoute;
    }
}
exports.default = BaseController;
