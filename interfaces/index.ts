import { FilterData } from "./filterData";
import { IUsers } from "./users";

declare module 'express' {
  interface Request {
    filterData?: FilterData
    files?:any;
    user?:IUsers;
  }
}