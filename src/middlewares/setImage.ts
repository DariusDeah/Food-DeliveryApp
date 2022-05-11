import { NextFunction, Request, Response } from "express";
import { Validation } from "../helpers/Validation";

export const setImage = (req: Request, res: Response, next: NextFunction) => {
  if (req.file) {
    Validation.fileSizeValidation(
      req.file.size,
      "10mb",
      "Image file size is too large"
    );
    req.body.image = req.file.path;
  }
  next();
};
