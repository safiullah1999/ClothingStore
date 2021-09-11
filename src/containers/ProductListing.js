import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // we will first fetch the object in our redux store.
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log("Error", err);
        })
        // console.log(response.data)
        // so to save these fetched products in our store we use usedispatch to dispatch an action which is SET_PRODUCT  
        dispatch(setProducts(response.data))
    }
    
    useEffect(()=>{
        fetchProducts();
    }, [] );

    console.log("Products:",products)    
    return (
        <div className="ui grid container">
            <div className="row">
            <ProductComponent />
            </div>
        </div>
    );
}

export default ProductListing
