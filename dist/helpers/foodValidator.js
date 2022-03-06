"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodValidator = void 0;
const foodValidator = (foodData) => {
    if (foodData.name.length)
        if (foodData.price > 0)
            if (foodData.size === 'small' || foodData.size === 'large' || foodData.size === 'medium')
                return foodData;
    return undefined;
};
exports.foodValidator = foodValidator;
