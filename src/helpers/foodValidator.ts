import { IFood, sizes } from "../interfaces/food.interface";

export const foodValidator = (foodData: IFood) => {
  const validationSchema = {
    name: !foodData.name || !foodData.name.length,
    nameErrorMessage: "name required",

    price: !foodData.price || foodData.price <= 0,
    priceErrorMessage: "price required and must be a valid amount",

    size:
      !foodData.size ||
      !foodData.size.length ||
      !sizes.small ||
      !sizes.medium||
      !sizes.large,
    sizeErrorMessage: `invalid size ${foodData.size},
    sizes must be between ${sizes.small}, ${sizes.medium} and ${sizes.large}`,
    
    calories: !foodData.calories,
    caloriesErrorMessage: "calories required",
  };

  if (validationSchema.name) return validationSchema.nameErrorMessage;
  if (validationSchema.price) return validationSchema.priceErrorMessage;
  if (validationSchema.size) return validationSchema.sizeErrorMessage;
  if (validationSchema.calories) return validationSchema.caloriesErrorMessage;

  return foodData;
};
