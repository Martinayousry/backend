import { Schema, model } from "mongoose";
import { ISubCategory } from "../interfaces/subCategories";
import path from "path";


const SubCategorySchema:Schema = new Schema<ISubCategory>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    category:{type:Schema.Types.ObjectId,required:true,ref:"categories"}
}, {
    timestamps: true//btsa3dni a3rf el document da created emta w akhr update leh emta
});


SubCategorySchema.pre<ISubCategory>(/^find/, function (next) {
    this.populate({ path: 'category', select: 'name' })//-_id yrg3li kol haga m3ada el id
    next();
  })
export default model<ISubCategory>("subCategories",SubCategorySchema);
