import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middleware/validatorMiddleware";
import subCategoryModel from "../../models/subCategoryModel";
import { ISubCategory } from "../../interfaces/subCategories";

export const createCategoryValidator: RequestHandler[] = [
  check("name")
      .notEmpty().withMessage('Category Name is Required')
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
 validatorMiddleware
]
  
export const updateCategoryValidator: RequestHandler[] = [
    check("name")
      .notEmpty().withMessage('Category Name is Required')
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
    validatorMiddleware
  ]
  
export const getCategoryValidator: RequestHandler[] = [
    check('id').isMongoId().withMessage(' Mongo Id is invalid'),
    validatorMiddleware
  ]
  
export const deleteCategoryValidator: RequestHandler[] = [
check("id").isMongoId().withMessage('Mongo Id is invalid')
      .custom(async(val) => {
        const subcategories = await subCategoryModel.find({ category: val });
if (subcategories.length > 0) {
        const bulk = subcategories.map((subcategory:ISubCategory) => ({
        deleteOne: {filter: { _id: subcategory._id } }
          }))
          await subCategoryModel.bulkWrite(bulk)
        }
        return true;//lazem b3d ay custom a3ml return true 3lshan ytnfz
      }),
    validatorMiddleware
  ]
