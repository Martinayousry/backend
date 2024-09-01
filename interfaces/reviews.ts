import { Document } from "mongoose";
import { IUsers } from "./users";
import { IProducts } from "./products";

export interface Reviews extends Document {
  comment: string;
  rating: number;
  user: IUsers;
  product: IProducts;
};