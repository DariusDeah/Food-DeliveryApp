
import { S3 } from "aws-sdk";
export const UberEats_Clone_Folder = new S3({
  accessKeyId: process.env["s3_ID"] as string,
  secretAccessKey: process.env["S3_ACCESS_KEY"] as string,
  region: process.env["S3_Region"] as string
  
})
