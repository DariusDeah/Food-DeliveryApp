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
exports.FoodDB = void 0;
const DB_config_1 = __importDefault(require("../DB.config"));
class FoodTable {
    create(food) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(food.image);
            let sqlQuery = `INSERT INTO foods (
      name,
      price,
      size,
      calories
      ${food.image ? ',image' : ''}
    )
    VALUES(
       ?,
       ?,
      ?,
      ?
      ${food.image ? ',?' : ''}
    )`;
            const [createdFood, _] = yield DB_config_1.default.query(sqlQuery, [food.name, food.price, food.size, food.calories, food.image ? food.image : '']);
            console.log(createdFood);
            return createdFood;
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryKeys = Object.keys(query);
            if (queryKeys.length) {
                const food = yield this.findByQuery(query);
                return food;
            }
            //if theres a query find by the query otherwise retrieve all from the table
            const sql = `SELECT id,name,price,size,image From foods`;
            const food = yield DB_config_1.default.query(sql);
            return food[0];
        });
    }
    findByQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryKeys = Object.keys(query);
            const queryValues = Object.values(query);
            const sql = `SELECT id,name,price,size,image FROM foods
                    WHERE ${queryKeys[0]} = '${queryValues[0]}'
                  ${queryKeys.length > 1 ?
                `AND ${queryKeys[1]} = '${queryValues[1]}'` : ''}`;
            const food = yield DB_config_1.default.query(sql);
            console.log(sql);
            return food[0];
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT id,name,price,size,image FROM foods WHERE id = ${id}`;
            const food = yield DB_config_1.default.query(sql);
            return food[0];
        });
    }
}
exports.FoodDB = new FoodTable();
