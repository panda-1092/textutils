import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(Props) {
  // const [Mode,setMode]=useState("Enable dark mode");
  // if(Props.mode==='dark'){
  //   setMode("Enable white mode")
  // }else{
  //   setMode("Enable dark mode")
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {Props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {Props.About}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${Props.mode==='light'?'dark':'light'}`}>
<input className="form-check-input" type="checkbox" onClick={Props.toogle} id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${Props.mode ==='dark'?'Enable lightmode':'Enable dark mode'}`}</label>
</div>
        </div>
      </div>
    </nav> 
  );
}
    
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
}

Navbar.defaultProps={
      title:'Set title', 
      About:'Aboutt'   
}