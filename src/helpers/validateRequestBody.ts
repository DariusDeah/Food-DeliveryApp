import { IFood } from "../interfaces/food.interface"

export const validateRequestBody = (reqFields:IFood, validFields:IFood) => {
  // let validRequestBody = {};
  // for (let i = 0; i < validFields.length; i++) {
  //     validRequestBody[validFields[i]] = reqFields[validFields[i]];
  // }

  // return validRequestBody;
  return reqFields === validFields
}