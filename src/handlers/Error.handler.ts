import { NextFunction, Request, Response } from "express";
import express from "express";
import { ApiError } from "../utils/Errors";

class ErrorHandler {
  routerError(app: express.Application): void {
    app.all("*", (req: Request, res: Response): void => {
      res.status(404).json({
        error: {
          status: "Fail",
          message: `route not found at ${req.originalUrl}`,
        },
      });
    });
  }

  error(app: express.Application): void {
    app.use(
      (
        err: ApiError,
        req: Request,
        res: Response,
        next: NextFunction
      ): void => {
        res.status(err.status || 500).json({
          error: {
            status: err.status || 500,
            message: err.status == 500 ? "server error" : err.message,
            path: req.url,
          },
        });
      }
    );
  }
}
export const ErrorHandlers = new ErrorHandler();
