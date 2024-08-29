import { updateProductValidator } from './../utils/validator/productsValidator';

import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, resizeImages, updateProduct, uploadProductImages } from '../controllers/products';
import { createProductValidator, deleteProductValidator, getProductValidator } from "../utils/validator/productsValidator";

const productsRoute: Router = Router();

productsRoute
  .route("/")
  .get(getProducts)
  .post(uploadProductImages,resizeImages,createProductValidator, createProduct);
productsRoute
  .route("/:id")
  .get(getProductValidator, getProduct)
  .put(updateProductValidator,updateProduct)
  .delete(deleteProductValidator, deleteProduct);
export default productsRoute;
