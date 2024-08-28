import { deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from './../utils/validator/categoryValidator';
import { createCategoryValidator } from "../utils/validator/categoryValidator";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "./../controllers/category";
import { Router } from "express";
import subCategoryRoute from './subCategoryRoute';

const categoryRoute: Router = Router();
categoryRoute.use('/:categoryId/subcategories', subCategoryRoute);
categoryRoute.route("/").get(getCategories).post(createCategoryValidator,createCategory);
categoryRoute.route("/:id").get(getCategoryValidator,getCategory).put(updateCategoryValidator,updateCategory).delete(deleteCategoryValidator,deleteCategory);
export default categoryRoute;
