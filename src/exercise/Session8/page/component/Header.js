import React from "react";
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
        fontFamily: "cursive",
        fontSize: 40,
        borderBottom: "1px solid white",
      }}
      className="col-12"
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Hello World
      </Link>
    </div>
  );
}
