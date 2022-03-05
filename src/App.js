import React, { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Product from "./Utils/Product";
import product from "./Data/ProductData";
import Cart from "./components/Cart";
import FiltereredData from "./components/FiltereredData";
import FetchData from "./components/FetchData";
import DataFetch from "./components/DataFetch";
import Counter from "./components/Counter";
function App() {
  const { data } = product;
  const [cartItem, setCartItem] = useState([{}]);
  const [cartNum, setCartNum] = useState(0);
  console.log('cart item is ',cartItem);
 
const  addToCartHandler=(cartImage,cartItemName)=>{
  setCartItem([
    ...cartItem,
    {
      "img": cartImage,
      "itemName": cartItemName
    }
    
  ]);
}
  return (
    <div>
      <Header cartItem={cartItem} />
      <Slider />
      <Counter/>
      <DataFetch/>
      <FetchData/>
      <FiltereredData product={product}/>
      <Product addToCartHandler={addToCartHandler} product={product} cartItem={cartItem} />
      <Cart cartItem={cartItem}/>
    </div>
  );
}

export default App;
