import React from "react";
import product from "../Data/ProductData";
function Products() {
  console.table(product);
  return (
    <div>
      {product.map((item, key) => {
        return (
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>  
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default Products;
