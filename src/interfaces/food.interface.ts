export interface FoodDTO{
   length: any;
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