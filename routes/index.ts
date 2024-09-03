import * as all from "../interfaces";
import { Application,Request,Response,NextFunction } from "express";
import subCategoryRoute from "./subCategoryRoute";
import categoryRoute from "./categoryRoute";
import apiErrors from "../utils/apiErros";
import globalErr from "../middleware/globalErr";
import productsRoute from "./productsRoute";
import usersRoute from "./usersRoute";
import authRoute from "./authRoute";
import reviewsRoute from "./reviewsRoute";
import couponsRoute from "./couponsRoute";
import cartsRoute from "./cartsRoute";
import wishlistRoute from "./wishListRoute";
import ordersRoute from "./ordersRoute";


const mountRoute=( app:Application ):void=>{
app.use("/api/v1/categories",categoryRoute);
app.use("/api/v1/subCategories",subCategoryRoute);
app.use("/api/v1/products",productsRoute);
app.use('/api/v1/reviews', reviewsRoute);
app.use('/api/v1/carts', cartsRoute);
app.use('/api/v1/wishlist', wishlistRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/coupons', couponsRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/auth', authRoute);
app.all('*',(req:Request,res:Response,next:NextFunction)=>{
next(new apiErrors(`the route ${req.originalUrl} is not found`,400))
})
app.use(globalErr)
}
export default mountRoute;