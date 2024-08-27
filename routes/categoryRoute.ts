import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "./../controllers/category";
import { Router } from "express";

const categoryRoute: Router = Router();

categoryRoute.route("/").get(getCategories).post(createCategory);
categoryRoute.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory);
export default categoryRoute;
