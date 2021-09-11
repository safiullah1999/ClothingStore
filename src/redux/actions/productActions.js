import { ActionTypes } from "../constants/action-types";

// we have to create actions for our respective action types.
// action always returns an object which has a type i.e action type and payload.
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  console.log("action:", product);
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
