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
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodService = void 0;
const Food_1 = require("../model/Food");
const Errors_1 = require("../utils/Errors");
class FoodService {
    createFood(foodData) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdFood = yield new Food_1.Food().create(foodData);
            return createdFood;
        });
    }
    getFood(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const [query] = Object.entries(req);
            if (query) {
                const food = yield this.getByQuery(query);
                return food;
            }
            const food = yield new Food_1.Food().find(``, ``);
            return food;
        });
    }
    getByQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(query);
            const food = yield new Food_1.Food().find(`${query[0]}`, `${query[1]}`);
            if (!food)
                throw new Errors_1.NotFoundException;
            return food;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield new Food_1.Food().findById(id);
            if (!food)
                throw new Errors_1.NotFoundException;
            return food;
        });
    }
}
exports.foodService = new FoodService();
