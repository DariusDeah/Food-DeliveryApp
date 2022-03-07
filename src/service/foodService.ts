import { ParsedQs } from "qs";
import { foodValidator } from "../helpers/foodValidator";
import {  FoodDB } from "../model/Food";
import { BadRequestException, NotFoundException } from "../utils/Errors";

class FoodService{
  async createFood(foodData: { name: string, price: number, size: string, calories: number,image:string}) {
    const food = foodValidator(foodData);
    if(food !== foodData) throw new BadRequestException(food);
    const createdFood = await FoodDB.create(foodData)
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