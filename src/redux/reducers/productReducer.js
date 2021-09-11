// a reducer always takes the initial state and the action.

import { ActionTypes } from "../constants/action-types";

const initialState = {
    // products: [{
    //     id: 1,
    //     title: "safiullah",
    //     category: "developer",
    // }]
    products: [],
}

export const productReducer = (state = initialState, {type, payload}) => {//action = {type, payload}
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;    
    }
}

export const selectedproductReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };