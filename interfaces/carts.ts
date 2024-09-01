import { Document } from "mongoose";
import { IUsers } from "./users";
import { IProducts } from "./products";

export interface Carts extends Document {
  cartItems: CartProducts[];
  totalPrice: number;
  totalPriceAfterDiscount: number | undefined;
  user: IUsers;
}

export interface CartProducts extends Document {
  product: IProducts;
  quantity: number;
  price: number;
}