export interface FoodDTO{
   id?: number;
   name: string,
   price: number|string,
   size:sizes ,
   calories:number,
   image?: string | null
}
export enum sizes{
  small = 'small',
  medium = 'medium',
  large = 'large',
}