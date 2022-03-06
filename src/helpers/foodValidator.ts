export const foodValidator = (foodData:{name: string, price: number,size:string,calories:number}) => {
  if (foodData.name.length)
  if (foodData.price > 0)
      if (foodData.size === 'small' || foodData.size === 'large' || foodData.size ==='medium') return foodData;
  return undefined;
}