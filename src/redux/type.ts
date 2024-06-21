import { ProductTypeAction } from "./product/actions";

export type UnionActions = ProductTypeAction;

export interface GenericAction<T = UnionActions, P = unknown> {
  type: T;
  payload?: P;
}

export interface ReducerActions {
  type: UnionActions;
  payload: unknown;
}
