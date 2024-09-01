
import { ISubCategory } from "../interfaces/subCategories";
import subCategoryModel from "../models/subCategoryModel";
import { createOneDocument, deleteDocument, getDocument, getDocuments, updateDocument } from "./apiHandler";
import { FilterData } from "../interfaces/filterData";
import {Request,Response, NextFunction } from "express";

export const filterData = (req: Request, res: Response, next: NextFunction) => {
  let filterData: FilterData = {};
  if (req.params.categoryId) { filterData.category = req.params.categoryId };
  req.filterData = filterData;
  next();
} 
export const setCategoryId = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.category) { req.body.category = req.params.categoryId };
  next();
};

export const createSubCategory = createOneDocument<ISubCategory>(subCategoryModel);
export const getSubCategories = getDocuments<ISubCategory>(subCategoryModel, 'category');
export const getSubCategory = getDocument<ISubCategory>(subCategoryModel);
export const updateSubCategory = updateDocument<ISubCategory>(subCategoryModel);
export const deleteSubCategory = deleteDocument<ISubCategory>(subCategoryModel);