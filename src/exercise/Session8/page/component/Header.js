import React from "react";
import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        height: 80,
        width: "100%",
        textAlign: "center",
        fontSize: 55,
        position: 'fixed',
        zIndex: 1
      }}
      className="col-12 home-main"
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Hello World
      </Link>
    </div>
  );
}
