import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import { GenericAction } from "../type";

const PRODUCT_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
} as const;

export type ProductTypeAction = keyof typeof PRODUCT_ACTIONS;

export type AddItemAction = GenericAction<"ADD_ITEM", IFurnitureCard>;
export type RemoveItemAction = GenericAction<"REMOVE_ITEM", number>;

export const addItemAction = (product: IFurnitureCard): AddItemAction => ({
  type: "ADD_ITEM",
  payload: product,
});

export const removeItemAction = (id: number): RemoveItemAction => ({
  type: "REMOVE_ITEM",
  payload: id,
});
