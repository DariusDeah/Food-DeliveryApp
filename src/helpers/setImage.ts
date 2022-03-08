import { HTTPHeaders } from "aws-sdk/clients/waf";
import { Request } from "express";
import { BadRequestException } from "../utils/Errors";

export const setImage = (reqBody:Request, imageFile) => {
  console.log({imageFile})
  const fileLimit = 1000000;
  if(imageFile.size > fileLimit ) throw new BadRequestException('Image file size is too large'+imageFile.size)
  reqBody.image = imageFile.path || reqBody.image;
  return reqBody
}