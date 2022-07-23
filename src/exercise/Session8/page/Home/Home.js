import React from "react";
import "animate.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#333", marginTop: "80px" }}
      className="col-10"
    >
      <div className="row">
        <div className="col-sm-6 mb-3 animate__animated animate__fadeInTopLeft">
          <img alt="" style={{ width: "95%" }} src={img1} />
        </div>
        <div className="col-sm-6 animate__animated animate__fadeInTopRight">
          <img
            alt=""
            style={{ width: "95%", paddingBottom: "60px" }}
            src={img7}
          />
          <img alt="" style={{ width: "95%" }} src={img8} />
        </div>
        <div className="col-sm-6 animate__animated animate__fadeInTopLeft">
          <img
            alt=""
            style={{ width: "95%", paddingBottom: "60px" }}
            src={img6}
          />
          <img alt="" style={{ width: "95%" }} src={img2} />
        </div>
        <div className="col-sm-6 mb-3 animate__animated animate__fadeInTopRight">
          <img alt="" style={{ width: "95%" }} src={img5} />
        </div>
        <div className="col-sm-6 mt-3 animate__animated animate__fadeInTopLeft">
          <img alt="" style={{ width: "95%" }} src={img3} />
        </div>
        <div className="col-sm-6 animate__animated animate__fadeInTopRight">
          <img
            alt=""
            style={{ width: "95%", paddingBottom: "60px" }}
            src={img4}
          />
          <img alt="" style={{ width: "95%" }} src={img9} />
        </div>
      </div>
    </div>
  );
}
