import React from "react";
import "animate.css";
import "./home.css";
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
      <div className="row home-main">
        <div className="home col-sm-6 mb-3 animate__animated animate__fadeInTopLeft">
          <img alt="" style={{ width: "95%" }} src={img1} />
          <div className="home-txt">
            <h1>
              Love all <br /> trust a few <br /> do wrong to none
            </h1>
          </div>
        </div>

        <div className="home col-sm-6 animate__animated animate__fadeInTopRight">
          <img
            alt=""
            style={{ width: "95%", paddingBottom: "10px" }}
            src={img7}
          />
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "50px",
              opacity: 0.6,
            }}
          >
            Love the life you live.
          </div>
          <img alt="" style={{ width: "95%", paddingTop: "10px" }} src={img8} />
        </div>

        <div className="col-sm-6 animate__animated animate__fadeInTopLeft">
          <img
            alt=""
            style={{ width: "95%", paddingBottom: "10px" }}
            src={img6}
          />
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "50px",
              opacity: 0.6,
            }}
          >
            The healthiest response to life is joy
          </div>
          <img alt="" style={{ width: "95%", paddingTop: "10px" }} src={img2} />
        </div>

        <div className="home col-sm-6 mb-3 animate__animated animate__fadeInTopRight">
          <img alt="" style={{ width: "95%" }} src={img5} />
          <div className="home-txt">
            <h1>We can only learn to love by loving</h1>
          </div>
        </div>

        <div className="home col-sm-6 mt-3 animate__animated animate__fadeInTopLeft">
          <img alt="" style={{ width: "95%" }} src={img3} />
          <div className="home-txt">
            <h1>All you need is love</h1>
          </div>
        </div>

        <div className="col-sm-6 mt-3 animate__animated animate__fadeInTopRight">
          <img
            alt=""
            style={{ width: "95%", paddingBottom: "10px" }}
            src={img4}
          />
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "50px",
              opacity: 0.6,
            }}
          >
            Turn your wounds into wisdom.
          </div>
          <img alt="" style={{ width: "95%", paddingTop: "10px" }} src={img9} />
        </div>
      </div>
    </div>
  );
}
