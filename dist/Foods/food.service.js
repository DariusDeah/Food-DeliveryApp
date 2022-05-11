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
const food_validator_1 = require("./food.validator");
const food_model_1 = require("./food.model");
const Errors_util_1 = require("../utils/Errors.util");
class FoodService {
    createFood(foodData) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = (0, food_validator_1.foodValidator)(foodData);
            // TODO REFACTOR, this code is not clean
            if (typeof food === "string")
                throw new Errors_util_1.BadRequestException(food);
            const createdFood = yield food_model_1.FoodDB.create(food);
            return createdFood;
        });
    }
    getFood(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield food_model_1.FoodDB.find(query);
            if (!food.length)
                throw new Errors_util_1.NotFoundException();
            return food;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield food_model_1.FoodDB.findById(id);
            if (!food.length)
                throw new Errors_util_1.NotFoundException();
            return food;
        });
    }
}
exports.foodService = new FoodService();
