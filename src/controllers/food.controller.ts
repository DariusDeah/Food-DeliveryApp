import { NextFunction ,Request,Response } from "express"
import { validateRequestBody } from "../helpers/validateRequestBody"
import { foodService } from "../service/foodService"
import { foodMaker } from "../utils/data"
import BaseController from "./controller.config"
 class FoodController extends BaseController {
   constructor() {
     super('/api/v1/foods') //baseroute
     
    this.router.route(this.baseRoute)
      .get(this.getFoods)
      .post(this.createFood)
    
    this.router.route(this.baseRoute + '/:id')
      .get(this.getById)
    this.router.route(this.baseRoute + '/stats')
    .get(this.getStats)
  }
  private async getFoods(req: Request, res: Response,next: NextFunction):Promise<void>{
  try {
    let foods = await foodService.getFood(req.query)
    res.status(200).json({
      status: 'success',
      results: foods.length,
      data:foods
    })
  } catch (error) {
    next(error)
  }
  }
  private async createFood(req: Request, res: Response, next: NextFunction):Promise<void> {
    try {
      const foods = validateRequestBody(req.body,["name","price","size","calories","image"])
       await foodService.createFood(foods)
     res.status(201).json({
       status: 'success',
       data: foods
     })
   } catch (error) {
     next(error)
   }
 }
   private async getById(req: Request, res: Response, next: NextFunction):Promise<void> {
      try {
        const food = await foodService.getById(req.params.id)
        res.status(200).json({
          status: 'success',
          data:food
        })
      } catch (error) {
        next(error)
      }
   }
     async getStats(req: Request, res: Response, next: NextFunction):Promise<void> {
    try {
      let foodStats;
    } catch (error) {
      next(error)
    }
   }
 }
export const foodController = new FoodController();