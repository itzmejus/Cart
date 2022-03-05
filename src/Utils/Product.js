import React from "react";
import ProductList from "../components/productList";
import "../styles/IndividualProduct.css";

function Product(props) {
  const { product,addToCartHandler } = props;
  return (
    <div className="item">
      {product.map((item) => (
        <ProductList key={item.id} item={item} addToCartHandler={addToCartHandler}  />
      ))}
    </div>
  );
}

export default Product;
