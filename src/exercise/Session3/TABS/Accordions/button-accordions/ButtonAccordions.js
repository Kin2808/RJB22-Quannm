import React, { useState } from "react";
import MultiAccordions from "./MultiAccordions";

const AccordionsDatas = [
  {
    name: "SIMPLE PANELS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "TOGGLE INFORMATION",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "NICE TOUCH",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function ButtonAccordions() {
  const [indexClicked, setindexClicked] = useState(0);
  return (
    <div className="a">
      <div className="border">
        {AccordionsDatas.map((data, index) => {
          return (
            <div onClick={() => setindexClicked(index)} key={`data-${index}`}>
              {data.name}
              {index === indexClicked && <div>{data.content}</div>}
            </div>
          );
        })}
      </div>

      <div className="border">
        {AccordionsDatas.map((data, index) => {
          return (
            <MultiAccordions
              key={`data-${index}`}
              index={index}
              data={data}
            ></MultiAccordions>
          );
        })}
      </div>
    </div>
  );
}
