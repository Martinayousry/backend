import {Document, Schema} from 'mongoose'
import { ICategory } from './category';
export interface ISubCategory extends Document {
    name: string;
    category: ICategory
}