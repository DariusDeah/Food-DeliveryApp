import { IFood, sizes } from "../interfaces/food.interface"

export const foodValidator = (foodData:IFood) => {
  if (!foodData.name.length || !foodData.name) return 'name required'
  if (foodData.price < 0 || !foodData.price) return 'price must be valid amount'
  if (!foodData.size.length) return 'size required'
  if (foodData.size !== sizes.small | sizes.medium | sizes.large)
    return `invalid size ${foodData.size},sizes must be between ${sizes.small},${sizes.medium} and ${sizes.large}`
  if (!foodData.calories) return 'calories required'
  console.log({foodData})
  return foodData
}