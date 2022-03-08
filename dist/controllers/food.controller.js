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
const controller_config_1 = __importDefault(require("./controller.config"));
const multer_config_1 = require("../middlewares/multer.config");
const setImage_1 = require("../helpers/setImage");
class FoodController extends controller_config_1.default {
    constructor() {
        super('/api/v1/foods'); //baseroute
        this.router.route(this.baseRoute)
            .get(this.getFoods)
            .post(multer_config_1.upload.single('image'), this.createFood);
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
                //validate and set image on request body
                console.log('1', req.body);
                (0, setImage_1.setImage)(req.body, req.file);
                console.log(req.body.image);
                yield (0, multer_config_1.uploadFile)(req.file, req.body);
                console.log(req.body);
                const food = req.body;
                yield foodService_1.foodService.createFood(food);
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
                    data: food
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
