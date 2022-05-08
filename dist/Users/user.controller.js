"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("./user.services");
const controller_config_1 = __importDefault(require("../controllers/controller.config"));
class UserController extends controller_config_1.default {
    constructor() {
        super("api/v1/users");
        this.router.route(this.baseRoute).post(this.createUser);
    }
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const createdUser = yield user_services_1.userService.createUser(user);
                res.status(201).json({
                    status: "success",
                    data: createdUser,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
const userController = new UserController();
