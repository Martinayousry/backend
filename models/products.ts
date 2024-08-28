import { Schema, model } from "mongoose";
import { Products } from "../interfaces/products";


const productsSchema: Schema = new Schema<Products>({

  name: { type: String, trim: true,required: true, unique: true },
  price: { type: Number, required: true, min: 1, max: 1000000 },
  description: { type: String, required: true, trim: true, minlength: 10, maxlength: 500 },
  priceAfterDiscount: { type: Number, min: 1, max: 1000000 },
  quantity: { type: Number, default: 0, min: 0 },
  sold: { type: Number, default: 0 },
  ratingAverage: { type: Number, min: 0, max: 5, default: 0 },
  ratingCount: { type: Number, default: 0 },
  cover: String,
  images: [String],
  category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' },
  subcategory: { type: Schema.Types.ObjectId, required: true, ref: 'subcategories' }
}, { timestamps: true });

productsSchema.pre<Products>(/^find/, function (next) {
  this.populate({ path: 'category', select: 'name' })
  this.populate({ path: 'subcategory', select: 'name' })
  next()
})

export default model<Products>('products', productsSchema)