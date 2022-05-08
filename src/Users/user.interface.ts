import { baseItem } from "../interfaces/baseItem.interface";

export interface UserDTO extends baseItem{
  id: number;
  fullName: string;
  email: string;
  password?: string;
  googleId?: string;
  address?: string;
  phone?: string;
  
}