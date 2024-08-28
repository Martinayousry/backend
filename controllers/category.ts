
import categoryModel from "../models/categoryModel";
import { ICategory } from "../interfaces/category";
import { createOneDocument, deleteDocument, getDocument, getDocuments, updateDocument } from "./apiHandler";

export const createCategory = createOneDocument<ICategory>(categoryModel);
export const getCategories = getDocuments<ICategory>(categoryModel, 'category');
export const getCategory = getDocument<ICategory>(categoryModel);
export const updateCategory = updateDocument<ICategory>(categoryModel);
export const deleteCategory = deleteDocument<ICategory>(categoryModel);


