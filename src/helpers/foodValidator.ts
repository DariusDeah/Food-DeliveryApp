 const validate = (foodData:{name: string, price: number,size:string,calories:number}) => {
  if (foodData.name.length)
    if (foodData.price > 0)
    //this needs to be more dynamic
      if (foodData.size === 'small' || foodData.size === 'large' || foodData.size ==='medium') return foodData;
  return undefined;
}
export const foodValidator = (foodData:{name: string, price: number,size:string,calories:number}) => {
  if (!foodData.name.length || !foodData.name) return 'name required'
  if (foodData.price < 0 || !foodData.price) return 'price must be valid amount'
  if (!foodData.size) return 'size required'
  if (!foodData.calories) return 'calories required'
  console.log({foodData})
  return foodData
}