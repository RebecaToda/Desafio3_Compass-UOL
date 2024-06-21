import { productReducer, ProductReducerType } from "./product/reducer";
import { combineReducers } from "redux";

interface RootState {
  product: ProductReducerType;
}

export const rootReducer = combineReducers({
  product: productReducer,
});
