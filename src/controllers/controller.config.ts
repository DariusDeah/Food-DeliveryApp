import express from 'express';
export default class BaseController{
  app: express.Application;
  private _router: express.Router
   get router() {
    return this._router
  }
  baseRoute:string
 
  constructor(baseRoute: string) {
    this.app = express()
    this._router = express.Router()
    this.baseRoute = baseRoute
  }
}