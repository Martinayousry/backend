import { Schema, model } from "mongoose";
import { ISubCategory } from "../interfaces/subCategories";


const SubCategorySchema:Schema = new Schema<ISubCategory>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    category:{type:Schema.Types.ObjectId,required:true}
}, {
    timestamps: true//btsa3dni a3rf el document da created emta w akhr update leh emta
});

export default model<ISubCategory>("subCategories",SubCategorySchema);
