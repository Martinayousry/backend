import { Schema, model } from "mongoose";
import { IProducts } from "../interfaces/products";



const productsSchema: Schema = new Schema<IProducts>({

  name: { type: String, trim: true,required: true},
  price: { type: Number, required: true, min: 1, max: 1000000 },
  description: { type: String, required: true, trim: true, minlength: 10, maxlength: 500 },
  priceAfterDiscount: { type: Number, min: 1, max: 1000000 },
  quantity: { type: Number, default: 0, min: 0 },
  sold: { type: Number, default: 0 },
  ratingAverage: { type: Number, min: 0,default:1},
  ratingCount: { type: Number, default: 0 },
  cover: String,
  images: [String],
  category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' },
  subcategory: { type: Schema.Types.ObjectId, required: true, ref: 'subCategories' }
}, { timestamps: true,toJSON:{ virtuals :true},toObject:{virtuals:true} });

productsSchema.virtual('reviews', { ref: 'reviews', foreignField: 'product', localField: '_id' })

productsSchema.pre<IProducts>(/^find/, function (next) {
  this.populate({ path: 'category', select: 'name' })
  this.populate({ path: 'subcategory', select: 'name' })
  next()
})

export default model<IProducts>('products', productsSchema)