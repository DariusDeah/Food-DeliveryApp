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
const DB_config_1 = __importDefault(require("../DB.config"));
class User {
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            `INSERT INTO users (first_name,last_name,email) 
    VALUES(${userData.first_name},${userData.last_name},${userData.email})`;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT first_name AS FirstName, last_name AS LastName, email AS Email, FROM users `;
            const users = yield DB_config_1.default.query(sql);
            return users[0];
        });
    }
}
