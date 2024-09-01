import { Router } from "express";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";
import { addProductToCartValidator, removeProductFromCartValidator, updateProductQuantityValidator } from "../utils/validator/cartsValidator";
import { addProductToCart, applyCoupon, clearCart, getLoggedUserCart, removeProduct, updateProductQuantity } from "../controllers/carts";

const cartsRoute: Router = Router();
cartsRoute.use(protectRoutes, checkActive, allowedTo('user'))

cartsRoute.route('/')
  .get(getLoggedUserCart)
  .post(addProductToCartValidator, addProductToCart)
  .delete(clearCart);

cartsRoute.put('/applyCoupon', applyCoupon)

cartsRoute.route('/:itemId')
  .put(updateProductQuantityValidator, updateProductQuantity)
  .delete(removeProductFromCartValidator, removeProduct);

export default cartsRoute;