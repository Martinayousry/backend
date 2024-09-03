import { Document } from "mongoose";
import { IProducts } from "./products";
type Role = 'manager' | 'admin' | 'user'
export interface IUsers extends Document {
  email: string;
  password: string;
  name: string;
  image: string;
  role: Role;
  active: boolean;
  wishlist:IProducts[];
  passwordChangedAt: Date | number;
  resetCode: string |undefined;
  resetCodeExpireTime: Date | number|undefined;
  resetCodeVerify: boolean|undefined;
}