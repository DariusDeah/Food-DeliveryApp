import { NextFunction ,Request,Response } from "express"
import { foodService } from "../service/foodService"
import { foodMaker } from "../utils/data"
import BaseController from "./controller.config"
import { upload, uploadFile } from "../middlewares/multer.config"
import { setImage } from "../helpers/setImage"
import { IFood } from "../interfaces/food.interface"
 class FoodController extends BaseController {
   constructor() {
     super('/api/v1/foods') //baseroute
     
    this.router.route(this.baseRoute)
      .get(this.getFoods)
      .post(
        upload.single('image'),
        this.createFood
      )
    
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
      //validate and set image on request body
      console.log('1', req.body)
      setImage(req.body, req.file)
      console.log(req.body.image)
     await uploadFile(req.file,req.body)
      console.log(req.body)
      const food: IFood = req.body;
      await foodService.createFood(food)
      
     res.status(201).json({
       status: 'success',
       data: food
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