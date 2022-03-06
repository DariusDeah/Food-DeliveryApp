import { NextFunction, Request, Response } from "express";
import { userService } from "../service/user.services";
import BaseController from "./controller.config";

class UserController extends BaseController {
  constructor() {
    super('api/v1/users')
    this.router.route(this.baseRoute).post(this.createUser)
  }
  async createUser(req:Request,res:Response,next:NextFunction): Promise<void> {
  try {
    const user = await userService.createUser(req.body)
    res.status(201).json({
      status: 'success',
      data: user
    })
  } catch (error) {
    next(error);
  }
}
}