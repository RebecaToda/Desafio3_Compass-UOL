import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import { ReducerActions } from "../type";

export type ProductReducerType = {
  product: IFurnitureCard[];
};

const initialState: ProductReducerType = {
  product: [],
};

export const productReducer = (
  state = initialState,
  actions: ReducerActions
) => {
  switch (actions.type) {
    case "ADD_ITEM":
      console.log(actions.payload);
      return { ...state, product: actions.payload as IFurnitureCard };
    case "REMOVE_ITEM": {
      const id = actions.payload;
      const newProducts = state.product.filter((el) => el !== id);
      return { ...state, product: newProducts };
    }
    default:
      return state;
  }
};
