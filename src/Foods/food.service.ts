import { ParsedQs } from "qs";
import { foodValidator } from "./food.validator";
import { FoodDTO } from "./food.interface";
import { FoodDB } from "./food.model";
import { BadRequestException, NotFoundException } from "../utils/Errors.util";

class FoodService {
  async createFood(foodData: FoodDTO) {
    const food = foodValidator(foodData);
    // TODO REFACTOR, this code is not clean
    if (typeof food === "string") throw new BadRequestException(food);
    const createdFood = await FoodDB.create(food);
    return createdFood;
  }
  async getFood(query: ParsedQs) {
    const food = await FoodDB.find(query);
    if (!food.length) throw new NotFoundException();
    return food;
  }

  async getById(id: string) {
    const food = await FoodDB.findById(id);
    if (!food.length) throw new NotFoundException();
    return food;
  }
}
export const foodService = new FoodService();
