"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodValidator = void 0;
const food_interface_1 = require("../interfaces/food.interface");
const foodValidator = (foodData) => {
    if (!foodData.name.length || !foodData.name)
        return 'name required';
    if (foodData.price < 0 || !foodData.price)
        return 'price must be valid amount';
    if (!foodData.size.length || !foodData.size)
        return 'size required';
    if (foodData.size !== food_interface_1.sizes.small | food_interface_1.sizes.medium | food_interface_1.sizes.large)
        return `invalid size ${foodData.size},sizes must be between ${food_interface_1.sizes.small},${food_interface_1.sizes.medium} and ${food_interface_1.sizes.large}`;
    if (!foodData.calories)
        return 'calories required';
    console.log({ foodData });
    return foodData;
};
exports.foodValidator = foodValidator;
