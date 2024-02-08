import createQueryParams, { QueryParams } from "../utils/createQueryParams";
import { get } from "./request";

export const getCategories = () => get("products/categories");

export const getProducts = (query?: QueryParams, search?: boolean) =>
  get(
    `products${search ? "/search" : ""}${query ? createQueryParams(query) : ""}`
  );

export const getProductDetail = (id: string, query?: QueryParams) =>
  get(`products/${id}${query ? createQueryParams(query) : ""}`);
