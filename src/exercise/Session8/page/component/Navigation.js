import React from "react";
import './component.css'
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function Navigation() {
  return (
    <div
      style={{ backgroundColor: "#222", marginTop: "80px" }}
      className="col-2 nav-main"
    >
      <ul style={{ listStyle: "none", padding: "0 50px" }}>
        <li style={{ paddingTop: "30px" }}>
          <NavLink style={{ color: "white", textDecoration: "none", fontWeight: '500', fontSize: '20px' }} to="/">
            <AiOutlineHome style={{ marginRight: "10px" }} />
            Home
          </NavLink>
        </li>
        <li style={{ color: "white", paddingTop: "30px", }}>
          Customer:
          <ul>
            <li style={{ margin: "20px 0 0 30px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/customer/list"
              >
                List
              </Link>
            </li>
            <li style={{ margin: "20px 0 0 30px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/customer/form"
              >
                Form
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ color: "white", paddingTop: "30px" }}>
          Product:
          <ul>
            <li style={{ margin: "20px 0 0 30px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/product/list"
              >
                List
              </Link>
            </li>
            <li style={{ margin: "20px 0 0 30px" }}>
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
