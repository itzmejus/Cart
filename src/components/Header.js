import React, { useState } from "react";
import "../styles/Header.css";
import cartIcon from '../images/cart1.png'
function Header(props) {
  const [searchTerm,setSearchTerm]=useState('');
  console.log(searchTerm);

  const {cartItem}=props;
  console.log(cartItem);
  return (
    <div>
      <div id="container">
        <div id="shopName">
          <b>SHOP</b>HERE
        </div>
        <div id="collection">
          <div id="clothing"> CLOTHING </div>
          <div id="accessories"> ACCESSORIES </div>
        </div>
        <div id="search">
          <i class="fas fa-search search"></i>
          <input
            type="text"
            id="input"
            name="searchBox"
            placeholder="Search for Clothing and Accessories"
            onChange={(event)=>{
              setSearchTerm(event.target.value)
            }}
          />
        </div>
        <div id="user">
          <a>
            
            <i class="fas fa-shopping-cart addedToCart">
              {/* <img src={cartIcon}/> */}
              <div id="badge">{cartItem.length  } </div>
            </i>
          </a>
          <a>
            <i class="fas fa-user-circle userIcon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
