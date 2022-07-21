import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div style={{ backgroundColor: "#222" }} className="col-2">
      <ul style={{ listStyle: "none", padding: '0 50px' }}>
        <li style={{ paddingTop: '30px' }}>
          <NavLink style={{ color: "white", textDecoration: "none"}} to="/">
            Home
          </NavLink>
        </li>
        <li style={{ color: "white",paddingTop: '30px' }}>
          Customer
          <ul>
            <li style={{margin: '20px 0 0 30px'}}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/customer/list"
              >
                List
              </Link>
            </li>
            <li style={{margin: '20px 0 0 30px'}}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/customer/form"
              >
                Form
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ color: "white",paddingTop: '30px' }}>
          Product
          <ul>
            <li style={{margin: '20px 0 0 30px'}}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/product/list"
              >
                List
              </Link>
            </li>
            <li style={{margin: '20px 0 0 30px'}}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/product/form"
              >
                Form
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
