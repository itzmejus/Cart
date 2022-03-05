import React from "react";

function Navbar() {
  return (
    <div>
      {/*    navbar section */}
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg  ">
        <a className="navbar-brand ">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar secion end */}

      {/* Home page section */}
    </div>
  );
}

export default Navbar;
// style={{color: "red"}}  inline styling
