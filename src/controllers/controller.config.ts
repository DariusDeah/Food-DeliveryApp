import express from 'express';
export default class BaseController{
  protected app: express.Application = express();
  protected router: express.Router = express.Router();
  baseRoute:string
 
  constructor(baseRoute: string) {
    this.baseRoute = baseRoute
  }
}
