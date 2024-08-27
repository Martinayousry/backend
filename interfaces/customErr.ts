export interface customErr extends Error{
    statusCode?:number;
    status?:string;
}