import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <h3 className="navbar-brand mx-3">Tutorials</h3>
      <form className="d-flex">
        <Link className="btn btn-info mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-info mx-3" to="/signup" role="button">Signup</Link>
      </form>
    </nav>
  );
};

export default Navbar;
