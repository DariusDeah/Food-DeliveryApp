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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
const food_controller_1 = require("../controller/food.controller");
class FoodsTest {
    constructor() {
        //taking the base route for the api endpoint from the controller to make testing more dynamic
        this.baseRoute = food_controller_1.foodController.baseRoute;
        this.ApiServer = app_1.app.app;
        this.RouteIdTest();
        this.validRoute();
        this.validRoute();
        this.postRequest();
    }
    RouteIdTest() {
        describe('GET /foods/:id', () => {
            describe('if food does not exist ', () => {
                it('should return 404', () => __awaiter(this, void 0, void 0, function* () {
                    const foodId = '123';
                    yield (0, supertest_1.default)(this.ApiServer).get(`${this.baseRoute}/${foodId}`).expect(404);
                }));
                describe('if food does exist', () => {
                    it('should return 200', () => __awaiter(this, void 0, void 0, function* () {
                        const foodId = '1';
                        yield (0, supertest_1.default)(this.ApiServer).get(`${this.baseRoute}/${foodId}`).expect(200);
                    }));
                });
            });
        });
    }
    validRoute() {
        describe('GET /foods', () => {
            describe('if foods exist', () => {
                it('should return 200', () => __awaiter(this, void 0, void 0, function* () {
                    yield (0, supertest_1.default)(this.ApiServer).get(this.baseRoute).expect(200);
                }));
            });
        });
    }
    postRequest() {
        describe('POST /foods', () => {
            describe('if post request is successful', () => {
                const reqBody = {
                    name: "endpointTest",
                    price: "1234",
                    size: "small",
                    calories: 44,
                    image: null,
                };
                it('should return 201', () => __awaiter(this, void 0, void 0, function* () {
                    yield (0, supertest_1.default)(this.ApiServer).post(this.baseRoute).send(reqBody).expect(201);
                }));
            });
        });
        describe('If POST request is unsuccessful', () => {
            const reqBody = {
                name: "dwfw",
                price: "12",
                size: "",
                calories: 44,
                image: null,
            };
            it('should return a 400', () => __awaiter(this, void 0, void 0, function* () {
                yield (0, supertest_1.default)(this.ApiServer).post(this.baseRoute).send(reqBody).expect(400);
            }));
        });
    }
}
const foodTest = new FoodsTest();
