import { ParsedQs } from "qs";
import {  FoodDB } from "../model/Food";
import { NotFoundException } from "../utils/Errors";

class FoodService{
  async createFood(foodData:{name:string,price:number,size:string,calories:number}) {
    const createdFood = await FoodDB.create(foodData)
    return createdFood
  }
  //FIXME this isn't logical
  async getFood(query) {
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