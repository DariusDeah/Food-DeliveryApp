import { Request } from "express";
import { BadRequestException } from "../utils/Errors.util";
import { Validation } from "./Validation";

export const setImage = (reqBody: Request, imageFile) => {
  imageFile.size && Validation.fileSizeValidation(imageFile.size, '10mb', 'Image file size is too large')
  reqBody.image = imageFile.path || reqBody.image;
  return reqBody
}