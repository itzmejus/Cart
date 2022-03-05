import React from "react";
import '../styles/Cart.css'
function Cart({ cartItem }) {
  let cartAddedItems = cartItem.map((item) => {
    return (
      <div >
     
          <div class="card">
            <img class="card-img-top" src={item.img} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{item.itemName}</h5>
              <p class="card-text"></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        
      </div>
    );
  });
  return <div className="cart-item">{cartAddedItems}</div>;
}

export default Cart;
