import { baseItem } from "./baseItem.interface";

export interface UserDTO extends baseItem{
  id: number;
  fullName: string;
  email: string;
  password?: string;
  googleId?: string;
  address?: string;
  phone?: string;
  
}