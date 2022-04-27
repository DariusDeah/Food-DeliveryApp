
import { S3 } from "aws-sdk";
export const UberEats_Clone_Folder = new S3({
  accessKeyId: process.env.s3_ID,
  secretAccessKey: process.env.S3_ACCESS_KEY,
  region: process.env.S3_Region
  
})
