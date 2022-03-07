 export interface IFood{
   name: string,
   price: number,
   size:sizes ,
   calories:number,
   image?: string | null
}
export enum sizes{
  small = 'small',
  medium = 'medium',
  large = 'large',
}