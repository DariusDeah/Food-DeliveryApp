"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodValidator = void 0;
const food_interface_1 = require("../interfaces/food.interface");
const Validation_1 = require("./Validation");
const foodValidator = (foodData) => {
    const validationErrors = {
        nameErrorMessage: "name required",
        priceErrorMessage: "price required and must be a valid amount",
        sizeErrorMessage: `invalid size ${foodData.size}, sizes must be between ${food_interface_1.sizes.small}, ${food_interface_1.sizes.medium} and ${food_interface_1.sizes.large}`,
        caloriesErrorMessage: "calories required",
    };
    //name validation
    Validation_1.Validation.requiredString(foodData.name, validationErrors.nameErrorMessage);
    //size validation
    Validation_1.Validation.requiredString(foodData.size, "size required")
        .matchesValues(foodData.size, [food_interface_1.sizes.small, food_interface_1.sizes.medium, food_interface_1.sizes.large], validationErrors.sizeErrorMessage);
    //price validation
    //TODO currently price can be accepted as string or number this logic will need to be changed later
    Validation_1.Validation.requiredString(foodData.price.toString(), validationErrors.priceErrorMessage);
    //calories validation
    Validation_1.Validation.requiredInt(foodData.calories, validationErrors.caloriesErrorMessage);
    return foodData;
};
exports.foodValidator = foodValidator;
