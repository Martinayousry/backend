import { Application,Request,Response,NextFunction } from "express";
import subCategoryRoute from "./subCategoryRoute";
import categoryRoute from "./categoryRoute";
import apiErrors from "../utils/apiErros";
import globalErr from "../middleware/globalErr";


const mountRoute=( app:Application ):void=>{
app.use("/api/v1/categories",categoryRoute);
app.use("/api/v1/subCategories",subCategoryRoute);
app.all('*',(req:Request,res:Response,next:NextFunction)=>{
next(new apiErrors(`the route ${req.originalUrl} is not found`,400))
})
app.use(globalErr)
}
export default mountRoute;