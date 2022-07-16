import React, { useState } from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const dataImg = [img1, img2, img3, img4, img5];
export default function Image() {
  const [imageIndex, setimageIndex] = useState(0);
  return (
    <>
    <div style={{textAlign: 'center'}}>
      <button
        onClick={() =>
          setimageIndex(imageIndex === 0 ? dataImg.length - 1 : imageIndex - 1)
        }
      >
        Previos
      </button>
      <button
        onClick={() =>
          setimageIndex(imageIndex === dataImg.length - 1 ? 0 : imageIndex + 1)
        }
      >
        Next
      </button>
      {dataImg.map((data, index) => {
        return (
            <div key={index}>
              {index === imageIndex && (
                <img src={data} style={{ width: "50%" }}></img>
              )}
            </div>         
        );
      })}
    </div>
    </>
  );
}
