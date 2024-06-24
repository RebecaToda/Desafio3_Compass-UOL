import { productReducer } from "./product/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  product: productReducer,
});
