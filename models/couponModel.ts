import { Coupons } from "../interfaces/coupon";
import { Schema, model } from "mongoose";

const couponsSchema: Schema = new Schema<Coupons>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    expireTime: { type: Date, required: true },
    discount: { type: Number, required: true, min: 1, max: 100 },
  },
  { timestamps: true }
);

export default model<Coupons>("coupons", couponsSchema);
