import React, { useState } from "react";
import './Standard.css'
import img1 from "./img/g1.jpg";
import img2 from "./img/g2.jpg";
import img3 from "./img/g3.jpg";
import { BsDot } from 'react-icons/bs';

export default function Standard() {
  const [indexImg, setindexImg] = useState(0);
  const ImgArr = [
    {
        id: 1,
        name: img1
    },
    {
        id: 2,
        name: img2
    },
    {
        id: 3,
        name: img3
    }
];

  return (
    <>
      <div className="Standard-main">
        <h4>STANDARD SLIDER</h4>
        <p>
          Image slider gallery with all controls. Initialize with
          'slider-all-controls' class.
        </p>
        {ImgArr.map((data, index) => {
          return (
            <>
            <div key={index} className="q">
              {index == indexImg ? (
                <img  style={{ width: `100%` }} src={data.name}></img>
              ) : null}
            </div>

            <div>{index} --- {indexImg}</div>

              <div className="e">
              <ul style={{listStyle: `circle`}}
                onClick={() => {
                  setindexImg(index);
                }}
              >
                <li>Click</li>
              </ul>
              </div>
            </>
          );
        })}
        {/* <ul style={{listStyle: `circle`}}>
            <li onClick={() => {
                setindexImg({indexImg: 1 )
            }}>1</li>
            <li onClick={() => {
                setindexImg(indexImg == ImgArr[1].id)
            }}>2</li>
            <li>3</li>
        </ul > */}
        <button
          onClick={() => {
            setindexImg(indexImg === ImgArr.length - 1 ? 0 : indexImg + 1);
          }}
        >
          click here
        </button>
        <button
          onClick={() => {
            setindexImg(indexImg === 0 ? ImgArr.length - 1 : indexImg - 1);
          }}
        >
          Lui
        </button>
      </div>
    </>
  );
}
