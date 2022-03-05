import React from "react";
import data from "../data";

function Mapping() {
  console.table(data);
  return (
    // <div>
    //     {data.map(item=>(
    //         <div key={item.id}>
    //             <h1>{item.first_name}</h1>
    //             <h1>{item.last_name}</h1>
    //             <h1>{item.gender}</h1>
    //             <img src={item.image}/>
    //         </div>
    //     ))}

    // </div>
    
    <div class="card" style={{ width: "18rem" }}>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            className="card-img-top"
            style={{ width: "5rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.first_name}</h5>
            <h5 className="card-title">{item.last_name}</h5>
            <p className="card-text">
             {item.email}
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mapping;
