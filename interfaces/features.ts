export interface queryString{
    readonly sort?:string;
    readonly fields?:string;
    readonly limit?:number;
    readonly page?:number;
    readonly search?:string;
    [key:string]:any;

}
export interface SearchQuery {
    $or?: Array<{ [key: string]: RegExp }>;
    [key: string]: any;
  }
  
export interface PaginationQuery {
    limit?: number;
    totalPages?: number;
    currentPage?: number;
    prev?: number;
    next?: number;
  }