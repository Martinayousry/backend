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
import { allowedTo, checkActive, protectRoutes } from '../controllers/auth';
import { updateCategoryValidator } from '../utils/validator/categoryValidator';
import { check } from 'express-validator';

const subCategoryRoute: Router = Router({mergeParams:true});

subCategoryRoute
  .route("/")
  .get(filterData,getSubCategories)
  .post(protectRoutes,checkActive,allowedTo('manager','admin'),createSubcategoryValidator, createSubCategory);
subCategoryRoute
  .route("/:id")
  .get(getSubCategoryValidator, getSubCategory)
  .put(protectRoutes,checkActive,allowedTo('manager','admin'),updateCategoryValidator,updateSubCategory)
  .delete(protectRoutes,checkActive,allowedTo('manager','admin'),deleteSubcategoryValidator, deleteSubCategory);
export default subCategoryRoute;
