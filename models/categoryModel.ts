import { Schema, model } from "mongoose";
import { ICategory } from '../interfaces/category'; 



const categorySchema:Schema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
}, {
    timestamps: true//btsa3dni a3rf el document da created emta w akhr update leh emta
});

export default model<ICategory>("categories",categorySchema);
