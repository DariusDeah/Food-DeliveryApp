import { FoodDTO, sizes } from "./food.interface";
import { Validation } from "../helpers/Validation";

export const foodValidator = (foodData: FoodDTO) => {
  const validationErrors = {
    nameErrorMessage: "name required",
    priceErrorMessage: "price required and must be a valid amount",
    sizeErrorMessage: `invalid size ${foodData.size}, sizes must be between ${sizes.small}, ${sizes.medium} and ${sizes.large}`,
    caloriesErrorMessage: "calories required",
  };

  //name validation
  Validation.requiredString(foodData.name, validationErrors.nameErrorMessage);
  //size validation
  Validation.requiredString(foodData.size, "size required").matchesValues(
    foodData.size,
    [sizes.small, sizes.medium, sizes.large],
    validationErrors.sizeErrorMessage
  );
  //price validation
  //TODO currently price can be accepted as string or number this logic will need to be changed later
  Validation.requiredString(
    foodData.price.toString(),
    validationErrors.priceErrorMessage
  );
  //calories validation
  Validation.requiredInt(
    foodData.calories,
    validationErrors.caloriesErrorMessage
  );
  return foodData;
};
