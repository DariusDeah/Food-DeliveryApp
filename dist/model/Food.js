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
exports.Food = void 0;
const DB_config_1 = __importDefault(require("../DB.config"));
// interface IFood{
//   name: string
//   price: number
//   size: string
//   calories: number
//   isActive: boolean 
// }
class Food {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `INSERT INTO foods (
      name,
      price,
      size,
      calories
    )
    VALUES(
      '${data.name}',
       ${data.price},
       '${data.size}',
       ${data.calories}
    )`;
            console.log(data);
            const [newFood, _] = yield DB_config_1.default.execute(sql);
            return newFood;
        });
    }
    find(query, value) {
        return __awaiter(this, void 0, void 0, function* () {
            //if theres a query find by the query otherwise retrive all from the table
            const sql = `SELECT * From foods ${query && value ? `WHERE ${query} ="${value}"` : ''}`;
            console.log(sql);
            const food = yield DB_config_1.default.query(sql);
            // food[1] = undefined
            return food[0];
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM foods WHERE id = ${id}`;
            const food = yield DB_config_1.default.query(sql);
            return food;
        });
    }
}
exports.Food = Food;
