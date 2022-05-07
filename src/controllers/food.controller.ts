import { NextFunction, Request, Response, Router } from "express";
import { foodService } from "../service/foodService";
import BaseController from "./controller.config";
import { upload, uploadFile } from "../middlewares/multer.config";
import { setImage } from "../helpers/setImage";
import { FoodDTO } from "../interfaces/food.interface";
import { deleteLocalMulterImages } from "../helpers/unlinkLocal";
class FoodController extends BaseController {
  constructor() {
    super("/api/v1/foods"); //base route

    this.router
      .route(this.baseRoute)
      .get(this.getFoods)
      .post(upload.single("image"), this.createFood);

    this.router.route(this.baseRoute + "/:id").get(this.getById);

    this.router.route(this.baseRoute + "/stats").get(this.getStats);
  }
  get controllerRouter(): Router {
    return this.router;
  }

  private async getFoods(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const foods: FoodDTO = await foodService.getFood(req.query);
      res.status(200).json({
        status: "success",
        results: foods.length,
        data: foods,
      });
    } catch (error) {
      next(error);
    }
  }
  private async createFood(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      //validate and set image on request body
      
      req.file && setImage(req.body, req.file);
      const food: FoodDTO = req.body;
      await foodService.createFood(food);
      //send to s3 after all request validation has been made and item is created
      req.file && await uploadFile(req.file, food);
      req.file && await deleteLocalMulterImages(req.file?.path);
      res.status(201).json({
        status: "success",
        data: food,
      });
    } catch (error) {
      next(error);
    }
  }
  private async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const food: FoodDTO = await foodService.getById(req.params.id);
      res.status(200).json({
        status: "success",
        data: food,
      });
    } catch (error) {
      next(error);
    }
  }
  async getStats(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      let foodStats;
    } catch (error) {
      next(error);
    }
  }
}
export const foodController = new FoodController();
