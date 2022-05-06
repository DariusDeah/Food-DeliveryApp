import { NextFunction, Request, Response } from "express";
import { userService } from "../service/user.services";
import BaseController from "./controller.config";
import { UserDTO } from "../interfaces/user.interface";
class UserController extends BaseController {
  constructor() {
    super("api/v1/users");
    this.router.route(this.baseRoute).post(this.createUser);
  }
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user: UserDTO = req.body;
      const createdUser = await userService.createUser(user);
      res.status(201).json({
        status: "success",
        data: createdUser,
      });
    } catch (error) {
      next(error);
    }
  }
}
const userController = new UserController();
