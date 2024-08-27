import {Document, Schema} from 'mongoose'
export interface ISubCategory extends Document {
    name: string;
    category:Schema.Types.ObjectId;
}