import { Coupons } from "../interfaces/coupon";
import couponModel from "../models/couponModel";
import {
  createOneDocument,
  deleteDocument,
  getDocument,
  getDocuments,
  updateDocument,
} from "./apiHandler";

export const createCoupon = createOneDocument<Coupons>(couponModel);
export const getCoupons = getDocuments<Coupons>(couponModel, "coupons");
export const getCoupon = getDocument<Coupons>(couponModel);
export const updateCoupon = updateDocument<Coupons>(couponModel);
export const deleteCoupon = deleteDocument<Coupons>(couponModel);
