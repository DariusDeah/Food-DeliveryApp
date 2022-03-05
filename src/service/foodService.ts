import { ParsedQs } from "qs";
import {  FoodDB } from "../model/Food";
import { NotFoundException } from "../utils/Errors";

class FoodService{
  async createFood(foodData:{name:string,price:number,size:string,calories:number}) {
    const createdFood = await FoodDB.create(foodData)
    return createdFood
  }
  async getFood(req: ParsedQs) {
    const [query] = Object.entries(req)
    if (query) {
      const food = await this.getByQuery(query)
      return food
    }
    const food = await new Food().find(``, ``)
     return food
  }
  async getByQuery(query: string[]) {
    console.log(query)
    const food = await new Food().find(`${query[0]}`, `${query[1]}`)
    if(!food) throw new NotFoundException
      return food
  }
  async getById(id: string) {
    const food = await new Food().findById(id)
    if (!food.length) throw new NotFoundException()
    return food
  }
}
export const foodService = new FoodService()