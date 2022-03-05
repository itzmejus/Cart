import React from "react";
import "../styles/FilteredData.css";
function FiltereredData(props) {
//   function showCategory(Category) {
//     console.log(Category);
//   }
  function showFilteredItem(category) {
      alert('please show the item of '+category)
      console.log(category);
  }
  let allCategory = props.product.map((item) => {
    return (
      <div className="filtered">
        <h1 onClick={()=>{showFilteredItem(item.category)}} key={item.id}>
          {item.category}
        </h1>
      </div>
    );
  });

  return (
    <div className="filtered">
      <div>
        <ul>  
          <li
           onClick={showFilteredItem}
            className="item"
          >
            {allCategory}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FiltereredData;
