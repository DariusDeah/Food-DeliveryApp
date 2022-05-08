import { deleteLocalMulterImages } from "../helpers/unlinkLocal";
import { uploadFile } from "../middlewares/multer.config";
import { Request } from "express";
import { FoodDTO } from "../interfaces/food.interface";
import { baseItem } from "../interfaces/baseItem.interface";
//implement strategy pattern for photo uploads
const Food_S3_Upload = async (req: Request, food: FoodDTO): Promise<void> => {
  await uploadFile(req.file, food, process.env["S3_Name"] as string);
  await deleteLocalMulterImages(req.file.path);
};
const uploadStrategies = {
  food: Food_S3_Upload,
};
export const UploadToS3 = (
  itemType: string,
  req: Request,
  item: baseItem
): Function => {
  return uploadStrategies[itemType](req, item);
};
