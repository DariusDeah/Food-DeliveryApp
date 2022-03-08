import express from 'express';
import helmet from 'helmet';
import { foodController } from './controllers/food.controller';
import { ErrorHandlers } from './handlers/Error.handler';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import multer from 'multer';
 class App{
   app: express.Application;
  constructor() {
    this.app = express();
    this.useMiddleware()
    this.useRoutes()
  }
   private useMiddleware() {
     this.app.use(helmet())
     this.app.use(ExpressMongoSanitize())
     this.app.use(express.json({ limit: '20mb' }))
  }
  private useRoutes() {
    this.app.use('/', foodController.router)
    ErrorHandlers.error(this.app)
    ErrorHandlers.routerError(this.app);
  }
}
export const app = new App()