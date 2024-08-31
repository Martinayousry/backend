import { deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from './../utils/validator/categoryValidator';
import { createCategoryValidator } from "../utils/validator/categoryValidator";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "./../controllers/category";
import { Router } from "express";
import subCategoryRoute from './subCategoryRoute';
import { allowedTo, protectRoutes } from '../controllers/auth';

const categoryRoute: Router = Router();
categoryRoute.use('/:categoryId/subcategories', subCategoryRoute);
categoryRoute.route("/")
.get(getCategories)
.post(createCategoryValidator,protectRoutes,allowedTo('manager','admin'),createCategoryValidator,createCategory);
categoryRoute.route("/:id")
.get(getCategoryValidator,getCategory).
put(protectRoutes,allowedTo('manager','admin'),updateCategoryValidator,updateCategory).
delete(protectRoutes,allowedTo('manager','admin'),deleteCategoryValidator,deleteCategory);
export default categoryRoute;
