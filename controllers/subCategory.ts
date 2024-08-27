import {Request,Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { ISubCategory } from "../interfaces/subCategories";
import subCategoryModel from "../models/subCategoryModel";

export const createSubCategory=asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
  const subCategory:ISubCategory=await subCategoryModel.create(req.body);
  res.status(201).json({data: subCategory});
})
export const getSubCategories=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const subCategory=await subCategoryModel.find();
    res.status(201).json({data: subCategory});

})
export const getSubCategory=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const subCategory=await subCategoryModel.findById(req.params.id);
    res.status(200).json({data: subCategory});

})
export const updateSubCategory=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
const subCategory=await subCategoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).json({data: subCategory});
})
export const deleteSubCategory =asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
  const subCategory =await subCategoryModel.findByIdAndDelete(req.params.id);
  res.status(204).json();
}
)
