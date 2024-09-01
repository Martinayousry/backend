import { NextFunction, Request, Response } from "express";

import { Reviews } from "../interfaces/reviews";
import { FilterData } from "../interfaces/filterData";
import { createOneDocument, deleteDocument, getDocument, getDocuments, updateDocument } from "./apiHandler";
import reviewsModel from "../models/reviewsModel";


export const filterReviews = (req: Request, res: Response, next: NextFunction) => {
  let filterData: FilterData = {};
  if (req.params.productId) { filterData.product = req.params.productId };
  req.filterData = filterData;
  next();
}

export const setProductAndUserId = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.product) { req.body.product = req.params.productId };
  if (!req.body.user) { req.body.user = req.user?._id };
  next();
};

export const createReview = createOneDocument<Reviews>(reviewsModel)
export const getReviews = getDocuments<Reviews>(reviewsModel, 'reviews')
export const getReview = getDocument<Reviews>(reviewsModel)
export const updateReview = updateDocument<Reviews>(reviewsModel)
export const deleteReview = deleteDocument<Reviews>(reviewsModel)