import { NextFunction, Request, Response } from "express";
import { app } from "../app";
import express from 'express';

class ErrorHandler{
  routerError(app: express.Application) {
    app.all('*', (req: Request, res: Response) =>
      res.status(404).json({
        status: 'Fail',
        error: `route not found at ${req.url}`
      })
  }

  error(app: express.Application) {
    app.use((err:Error, req:Request, res:Response, next:NextFunction) => 
      res.status(err.status || 500).json({
         status: err.status || 500,
          message: err.message,
          path: req.url
      }) 
    ) 
  }
  

}
export const ErrorHandlers = new ErrorHandler()