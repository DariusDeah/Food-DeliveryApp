import multer from 'multer';
import { BadRequestException } from '../utils/Errors';
import { json, NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import { UberEats_Clone_Folder } from '../aws/s3.congifg'


const multerFilter = async (req, file,next) => {
  console.log({ file })
  if (!file.mimetype.startsWith('image')) next(new BadRequestException('invalid file type: ' + file.mimetype))
   next(null,true)
}
export const upload = multer({ dest: 'uploads',fileFilter:multerFilter })

export const uploadFile = (file,reqBody:Request) => {
  const fileStream = fs.createReadStream(file.path)
  const extension = file.mimetype.split('/')[1]
  const Key = `${reqBody.size}-${reqBody.name}-${Date.now()}.${extension}`
  const uploadParams = {
    Bucket: process.env.S3_Name,
    Body: fileStream,
    Key
    }

 return UberEats_Clone_Folder.upload(uploadParams).promise()
}