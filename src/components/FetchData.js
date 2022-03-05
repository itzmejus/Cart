import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const newData = await response.json();
      setData(newData);
    };
    getData();
  }, []); 
  console.log('data is ',data);
  return (
    <div>
      <p>data is here</p> 
      {data.map((item)=>{
        return(
        <div key={item.id}>
          <h1>
            {item.name}
          </h1>
        </div>
          )
      })}
    </div>
  );
}

export default FetchData;
