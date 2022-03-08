"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodValidator = void 0;
const food_interface_1 = require("../interfaces/food.interface");
const foodValidator = (foodData) => {
    const validationSchema = {
        name: !foodData.name || !foodData.name.length,
        nameErrorMessage: "name required",
        price: !foodData.price || foodData.price <= 0,
        priceErrorMessage: "price required and must be a valid amount",
        size: !foodData.size ||
            !foodData.size.length ||
            !food_interface_1.sizes.small ||
            !food_interface_1.sizes.medium ||
            !food_interface_1.sizes.large,
        sizeErrorMessage: `invalid size ${foodData.size},
    sizes must be between ${food_interface_1.sizes.small}, ${food_interface_1.sizes.medium} and ${food_interface_1.sizes.large}`,
        calories: !foodData.calories,
        caloriesErrorMessage: "calories required",
    };
    if (validationSchema.name)
        return validationSchema.nameErrorMessage;
    if (validationSchema.price)
        return validationSchema.priceErrorMessage;
    if (validationSchema.size)
        return validationSchema.sizeErrorMessage;
    if (validationSchema.calories)
        return validationSchema.caloriesErrorMessage;
    return foodData;
};
exports.foodValidator = foodValidator;
