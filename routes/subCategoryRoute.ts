import { filterData } from './../controllers/subCategory';
import {
  createSubCategory,
  deleteSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
} from "../controllers/subCategory";
import { Router } from "express";
import {
  createSubcategoryValidator,
  deleteSubcategoryValidator,
  getSubCategoryValidator,
} from "../utils/validator/subCategoryValidator";

const subCategoryRoute: Router = Router({mergeParams:true});

subCategoryRoute
  .route("/")
  .get(filterData,getSubCategories)
  .post(createSubcategoryValidator, createSubCategory);
subCategoryRoute
  .route("/:id")
  .get(getSubCategoryValidator, getSubCategory)
  .put(updateSubCategory)
  .delete(deleteSubcategoryValidator, deleteSubCategory);
export default subCategoryRoute;
