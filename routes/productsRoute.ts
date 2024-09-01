import { updateProductValidator } from './../utils/validator/productsValidator';

import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, resizeImages, updateProduct, uploadProductImages } from '../controllers/products';
import { createProductValidator, deleteProductValidator, getProductValidator } from "../utils/validator/productsValidator";
import { allowedTo, protectRoutes } from '../controllers/auth';
import reviewsRoute from './reviewsRoute';

const productsRoute: Router = Router();
productsRoute.use('/:productId/reviews', reviewsRoute);

productsRoute
  .route("/")
  .get(getProducts)
  .post(protectRoutes,allowedTo('manager','admin'),uploadProductImages,resizeImages,createProductValidator, createProduct);
productsRoute
  .route("/:id")
  .get(getProductValidator, getProduct)
  .put(protectRoutes,allowedTo('manager','admin'),updateProductValidator,updateProduct)
  .delete(protectRoutes,allowedTo('manager','admin'),deleteProductValidator, deleteProduct);
export default productsRoute;
