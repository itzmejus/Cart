import React from "react";
import "../styles/IndividualProduct.css";

function ProductList(props) {
  const { item,addToCartHandler} = props;

  return (
    <div>
      <div class="card">
        <img src={item.imgUrl} alt="Denim Jeans" />
        <h1>{item.name}</h1>
        <p class="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p>
          <button onClick={()=>{addToCartHandler(item.imgUrl,item.name)}} >Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default ProductList;
