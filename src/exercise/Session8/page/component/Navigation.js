import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div style={{ backgroundColor: "#222"}} className="col-2">
      <ul style={{ listStyle: "none" }}>
        <li>
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </li>
        <li style={{ color: "white" }}>
          Customer
          <ul>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/customer/list"
              >
                List
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/customer/form"
              >
                Form
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ color: "white" }}>
          Product
          <ul>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/product/list"
              >
                List
              </Link>
            </li>
            <li>
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
