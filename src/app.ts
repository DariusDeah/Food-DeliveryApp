import express from 'express';
import helmet from 'helmet';
import { foodController } from './controllers/food.controller';
import { ErrorHandlers } from './handlers/Error.handler';
import ExpressMongoSanitize from 'express-mongo-sanitize';
 class App{
   app: express.Application = express();
   constructor() {
    this.useMiddleware()
    this.useRoutes()
  }
   private useMiddleware() {
    const app = this.app;

     app.use(helmet())
     app.use(ExpressMongoSanitize())
     app.use(express.json({ limit: '20mb' }))
  }
   private useRoutes() {
     const app = this.app;
     
    app.use('/', foodController.controllerRouter)
    ErrorHandlers.error(this.app)
    ErrorHandlers.routerError(this.app);
  }
}
export const app = new App()