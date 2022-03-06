import express from 'express';
import helmet from 'helmet';
import { foodController } from './controller/food.controller';
 class App{
   app: express.Application;
  constructor() {
    this.app = express();
    this.useMiddleware()
    this.useRoutes()
  }
   private useMiddleware() {
    this.app.use(helmet())
   this.app.use( express.json({limit:'10mb'}))
    
  }
  private useRoutes() {
    this.app.use('/',foodController.router)
  }
}
export const app = new App()