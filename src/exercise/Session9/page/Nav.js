import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav style={{height: '80px', lineHeight:'80px', paddingLeft: '15px'}} className="navbar-dark bg-dark">
        <span><Link to='/'>List</Link></span>
        <span style={{marginLeft: '20px'}}><Link to='form'>Form</Link></span>
      </nav>
    </>
  );
}
