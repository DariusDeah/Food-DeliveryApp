import { ParsedQs } from "qs";
import { foodValidator } from "../helpers/foodValidator";
import { IFood } from "../interfaces/food.interface";
import {  FoodDB } from "../model/Food.model";
import { BadRequestException, NotFoundException } from "../utils/Errors";

class FoodService{
  async createFood(foodData: IFood) {
    const food = foodValidator(foodData);
    if(typeof food === 'string' ) throw new BadRequestException(food);
    const createdFood = await FoodDB.create(food)
    return createdFood
  }
  async getFood(query:ParsedQs) {
    const food = await FoodDB.find(query)
    if (!food.length) throw new NotFoundException();
     return food
  }

  async getById(id: string) {
    const food = await FoodDB.findById(id)
    if (!food.length) throw new NotFoundException()
    return food
  }
}
export const foodService = new FoodService()