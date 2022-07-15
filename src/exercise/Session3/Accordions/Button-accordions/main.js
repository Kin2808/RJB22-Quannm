import React, { useState } from "react";
import MultiAccordions from "./MultiAccordions";
import "./Accordions.css";

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
    <div>
      <h4>BUTTON ACCORDIONS</h4>
      <div className="Acco-main row">
        <div className="col-sm-6">
          <h5>ONE AT A TIME</h5>
          {AccordionsDatas.map((data, index) => {
            const isActiveTab = index === indexClicked;
            return (
              <div
                style={{
                  backgroundColor: isActiveTab ? "#47b475" : "#fff",
                  color: isActiveTab ? "white" : "black",
                  border: isActiveTab ? "1px solid #ccc" : "none",
                }}
                className="Acco"
                onClick={() => setindexClicked(index)}
                key={`data-${index}`}
              >
                <div>{data.name}</div>
                {index === indexClicked && <p>{data.content}</p>}
              </div>
            );
          })}
        </div>

        <div className="col-sm-6">
          <h5>MULTIPLE OPEN</h5>
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
    </div>
  );
}
