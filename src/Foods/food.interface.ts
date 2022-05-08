import { baseItem } from "../interfaces/baseItem.interface";

export interface FoodDTO extends baseItem{
   length: any;
   id: number;
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