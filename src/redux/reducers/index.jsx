import { combineReducers } from "redux";
import { getProducts } from "./getProducts";
import { likeList } from "./likeList";
import { savedProduct } from "./savedProducts";
import { orderedList } from "./orderedProducts";

export const rootReducer = combineReducers({ getProducts, likeList, savedProduct, orderedList });
