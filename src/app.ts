import express from 'express';
import { foodController } from './controller/foodController';
 class App{
   app: express.Application;
  constructor() {
    this.app = express();
    this.useMiddleware()
    this.useRoutes()
  }
  private useMiddleware() {
   this.app.use( express.json({limit:'10mb'}))
    
  }
  private useRoutes() {
    this.app.use('/',foodController.router)
  }
}
export const app = new App()