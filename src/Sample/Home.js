import React from "react";
import data from "../data";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Large
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div class="container">
        {data
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, key) => (
            <div class="row align-items-start" key={item.id}>
              <div class="col">{item.first_name}</div>
              <div class="col">{item.last_name}</div>

              <div class="col">{item.gender}</div>
              <hr></hr>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
