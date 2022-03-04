"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
dotenv.config({ path: './.env' });
// export class DbcConfig {
//   db
//   constructor() {
//     this.db = this.DbConnect
//   }
//   private DbConnect() { //TODO: add return type
//    const dbConnection =  mysql.createPool({
//       user: process.env.user as string,
//       host: process.env.host as string,
//       password: process.env.password as string,
//       database: process.env.database as string
//    })
//     return dbConnection.promise()
//   }
// }
const db = mysql2_1.default.createPool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});
exports.default = db.promise();