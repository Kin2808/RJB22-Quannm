import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Multiopen from "./Multiopen";

export default function TextAccordions() {
  const [indexClicked, setindexClicked] = React.useState(0);
  const TextAccordions = [
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
  return (
    <>
      <div>
        <h5>ONE AT A TIME</h5>
        {TextAccordions.map((data, index) => {
          return (
            <div className="" onClick={() => setindexClicked(index)}>
              {indexClicked == index ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
              <div>
                {data.name}---index:{index}---Click{indexClicked}
              </div>
              {indexClicked == index && <p>{data.content}</p>}
            </div>
          );
        })}
      </div>

      <div>
        <h5>MULTIPLE OPEN</h5>
        {TextAccordions.map((data, index) => {
          return (
            <Multiopen
              data={data}
              index={index}
              key={index}
            ></Multiopen>
          );
        })}
      </div>
    </>
  );
}
