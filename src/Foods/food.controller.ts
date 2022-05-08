import { NextFunction, Request, Response, Router } from "express";
import { foodService } from "../Users/food.service";
import BaseController from "../controllers/controller.config";
import { upload } from "../middlewares/multer.config";
import { setImage } from "../middlewares/setImage";
import { FoodDTO } from "./food.interface";
import { UploadToS3 } from "../utils/FoodS3Upload.util";
class FoodController extends BaseController {
  constructor() {
    super("/api/v1/foods"); //base route

    this.router
      .route(this.baseRoute)
      .get(this.getFoods)
      .post(upload.single("image"), setImage,this.createFood);

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
      const food: FoodDTO = req.body;
      await foodService.createFood(food);
      if (req.body.image) {
        UploadToS3("food", req, food)
      }
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
