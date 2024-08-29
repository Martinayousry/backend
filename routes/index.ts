import * as all from "../interfaces";
import { Application,Request,Response,NextFunction } from "express";
import subCategoryRoute from "./subCategoryRoute";
import categoryRoute from "./categoryRoute";
import apiErrors from "../utils/apiErros";
import globalErr from "../middleware/globalErr";
import productsRoute from "./productsRoute";
import usersRoute from "./usersRoute";


const mountRoute=( app:Application ):void=>{
app.use("/api/v1/categories",categoryRoute);
app.use("/api/v1/subCategories",subCategoryRoute);
app.use("/api/v1/products",productsRoute);
app.use('/api/v1/users', usersRoute);
app.all('*',(req:Request,res:Response,next:NextFunction)=>{
next(new apiErrors(`the route ${req.originalUrl} is not found`,400))
})
app.use(globalErr)
}
export default mountRoute;