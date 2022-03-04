"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodMaker = void 0;
const foods = [
    "shrimp", "burger", "cheeseburger",
    "ramen", "sausage", "apple",
    "pancakes", "doughnut", "bagel",
    "hotdog", "chips", "pizza",
    "steak", "thai wrap", "thai bowl",
    "spaghetti", "veggies", "beef wellington",
    "Soup", "Salmon", "pad thai", "rice"
];
const prices = [
    5.99, 7.00, 10.99,
    12.00, 20.99, 30.99,
    40.99, 50.99, 60.99,
    70.99, 80.99, 90.99,
    100.99
];
const sizes = ["small", "medium", "large"];
const calories = [10, 35, 45, 100, 200, 300, 400, 600];
//create a fake json maker for the foods
const foodMaker = () => {
    const foodItem = {
        name: foods[Math.floor(Math.random() * foods.length)],
        price: prices[Math.floor(Math.random() * prices.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        calories: calories[Math.floor(Math.random() * calories.length)]
    };
    return foodItem;
};
exports.foodMaker = foodMaker;
