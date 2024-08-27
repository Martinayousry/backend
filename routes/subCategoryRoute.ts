
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategory, updateSubCategory } from "../controllers/subCategory";
import { Router } from "express";

const subCategoryRoute: Router = Router();

subCategoryRoute.route("/").get(getSubCategories).post(createSubCategory);
subCategoryRoute.route("/:id").get(getSubCategory).put(updateSubCategory).delete(deleteSubCategory);
export default subCategoryRoute;
