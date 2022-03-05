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
            const createdFood = yield Food_1.FoodDB.create(foodData);
            return createdFood;
        });
    }
    //FIXME this isn't logical
    getFood(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const [query] = Object.entries(req);
            if (query) {
                const food = yield this.getByQuery(query);
                return food;
            }
            const food = yield Food_1.FoodDB.find();
            return food;
        });
    }
    getByQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(query);
            const food = yield Food_1.FoodDB.find(`${query[0]}`, `${query[1]}`);
            if (!food)
                throw new Errors_1.NotFoundException;
            return food;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield Food_1.FoodDB.findById(id);
            if (!food.length)
                throw new Errors_1.NotFoundException();
            return food;
        });
    }
}
exports.foodService = new FoodService();
