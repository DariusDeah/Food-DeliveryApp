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
exports.foodController = void 0;
const foodService_1 = require("../service/foodService");
const data_1 = require("../utils/data");
const controller_config_1 = __importDefault(require("./controller.config"));
class FoodController extends controller_config_1.default {
    constructor() {
        super('/api/foods');
        this.router.route(this.baseRoute)
            .get(this.getFoods)
            .post(this.createFood);
        this.router.route(this.baseRoute + '/:id')
            .get(this.getById);
        this.router.route(this.baseRoute + '/stats')
            .get(this.getStats);
    }
    getFoods(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let foods = yield foodService_1.foodService.getFood(req.query);
                res.status(200).json({
                    status: 'success',
                    results: foods.length,
                    data: foods
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    createFood(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const validData = {
                //   name: req.body.name,
                //   price: req.body.price,
                //   size: req.body.size,
                //   calories: req.body.calories
                // }
                // console.log(req.body)
                const foods = (0, data_1.foodMaker)();
                const food = yield foodService_1.foodService.createFood(foods);
                res.status(201).json({
                    status: 'success',
                    data: food
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const food = yield foodService_1.foodService.getById(req.params.id);
                res.status(200).json({
                    status: 'success',
                    food
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getStats(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let foodStats;
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.foodController = new FoodController();
