import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middleware/validatorMiddleware";


export const addProductToCartValidator: RequestHandler[] = [
  check('product')
    .notEmpty().withMessage('Product required')
    .isMongoId().withMessage('invalid mongo id'),
  validatorMiddleware
]

export const removeProductFromCartValidator: RequestHandler[] = [
  check('itemId').isMongoId().withMessage('invalid mongo id'),
  validatorMiddleware
]

export const updateProductQuantityValidator: RequestHandler[] = [
  check('itemId').isMongoId().withMessage('invalid mongo id'),
  check('quantity')
    .notEmpty().withMessage('Quantity required')
    .isNumeric().withMessage('quantity must be number').toInt()//b3d ma el user ydkhl ay rakm hata lw float ana bakhdo w b7wlo 3ndi w h3ml ignore ll ksor
    .custom((val: number) => {
      if (val <= 0) {
        throw new Error('invalid quantity')
      }
      return true;
    }),
  validatorMiddleware
]