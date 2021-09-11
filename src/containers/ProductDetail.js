import React, { useEffect } from "react";
import { useParams } from "react-router"; // this is used to get url value.
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    console.log(response.data);
    dispatch(selectedProducts(response.data)); // this will store our fetched data into our store.
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
        dispatch(removeSelectedProduct());
    }
  }, [productId]); // means this will run everytime the productid changes.
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
