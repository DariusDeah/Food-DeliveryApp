import { NextFunction, Request, Response } from "express";
import { app } from "../app";
import express from 'express';

class ErrorHandler{
  routerError(app: express.Application) {
    app.all('*', (req: Request, res: Response) =>
      res.status(404).json({
        error: {
          status: 'Fail',
          message: `route not found at ${req.originalUrl}`
        }
      })
  }

  error(app: express.Application) {
    app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
      // if (err.status === 500) { err.message = 'server error' }
      res.status(err.status || 500).json({
        error: {
          status: err.status || 500,
          message: err.status == 500 ? 'server error':err.message,
          path: req.url
        }
      }) 
    }
    ) 

  }
  

}
export const ErrorHandlers = new ErrorHandler()