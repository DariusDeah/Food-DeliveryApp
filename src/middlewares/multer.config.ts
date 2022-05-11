import multer from "multer";
import { BadRequestException } from "../utils/Errors.util";
import { json, NextFunction, Request, Response } from "express";
import fs from "node:fs";
import { UberEats_Clone_Folder } from "../aws/s3.congifg";
import { baseItem } from "../interfaces/baseItem.interface";

const multerFilter = async (req: Request, file, next) => {
  console.log({ file });
  if (!file.mimetype.startsWith("image"))
    next(new BadRequestException("invalid file type: " + file.mimetype));
  next(null, true);
};
export const upload = multer({ dest: "/uploads", fileFilter: multerFilter });

export const uploadFile = (file, item: baseItem, S3Location: string) => {
  const fileStream = fs.createReadStream(file.path);
  const extension = file.mimetype.split("/")[1];
  const Key = `${item.name}-${Date.now()}.${extension}`;

  const uploadParams = {
    Bucket: S3Location,
    Body: fileStream,
    Key,
  };

  return UberEats_Clone_Folder.upload(uploadParams).promise();
};
