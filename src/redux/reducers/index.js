import { combineReducers } from "redux";
// import { selectedProducts } from "../actions/productActions";
import { productReducer, selectedproductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedproductReducer,
})

//we have basically combined all our reducers

export default reducers