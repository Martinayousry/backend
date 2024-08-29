import { Document, Schema } from "mongoose";

export interface IProducts extends Document {
  name: string;
  price: number;
  description: string;
  priceAfterDiscount: number;
  quantity: number;
  sold: number;
  ratingAverage: number;
  ratingCount: number;
  cover: string;
  images: string[];
  category: Schema.Types.ObjectId;
  subcategory: Schema.Types.ObjectId;
}