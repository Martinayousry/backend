import  bcrypt  from 'bcryptjs';
import { Request, Response, NextFunction } from "express";
import { IUsers } from "../interfaces/users";
import { createOneDocument, deleteDocument, getDocuments, getDocument } from "./apiHandler";
import asyncHandler from 'express-async-handler';
import sharp from "sharp";
import usersModel from "../models/usersModel";
import apiErrors from "../utils/apiErros";
import { uploadSingleImage } from "../middleware/uploadImages";
import { createToken } from "../utils/createToken";


export const createUser = createOneDocument<IUsers>(usersModel)
export const getUsers = getDocuments<IUsers>(usersModel, 'users')
export const getUser = getDocument<IUsers>(usersModel)
export const updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await usersModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    image: req.body.image,
    active: req.body.active
  }, { new: true })
  if (!user) { return next(new apiErrors('user not found', 404)) };
  res.status(200).json({ data: user, message: 'user updated successfully' })
});
export const deleteUser = deleteDocument<IUsers>(usersModel)
export const uploadUserImage = uploadSingleImage('image');
export const resizeUserImage = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const imageName: string = `user-${Date.now()}.jpeg`
    await sharp(req.file.buffer)
      .toFormat('jpeg')
      .jpeg({ quality: 95 })
      .toFile(`uploads/users/${imageName}`)
    req.body.image = imageName;
  }
  next();
});
export const changeUserPassword = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await usersModel.findByIdAndUpdate(req.params.id, {
    password: await bcrypt.hash(req.body.password, 13),
    passwordChangedAt: Date.now()
  }, { new: true })
  if (!user) { return next(new apiErrors('user not found', 404)) }
  res.status(200).json({ message: 'user password changed successfully', data: user })
});
export const setLoggedUserId = asyncHandler((req: Request, res: Response, next: NextFunction) => {
  req.params.id = req.user?._id!.toString();
  next();
})
export const updateLoggedUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await usersModel.findByIdAndUpdate(req.user?._id, {
    name: req.body.name,
    image: req.body.image,
  }, { new: true })
  res.status(200).json({ data: user, message: 'user updated successfully' })
})
export const changeLoggedUserPassword = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await usersModel.findByIdAndUpdate(req.user?._id, {
    password: await bcrypt.hash(req.body.password, 13),
    passwordChangedAt: Date.now()
  }, { new: true })
  const token: string = createToken(user?._id,user?.role!)
  res.status(200).json({ message: 'password changed successfully', token })
});