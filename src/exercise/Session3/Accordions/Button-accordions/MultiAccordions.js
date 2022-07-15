import React, { useState } from "react";

export default function MultiAccordions(props) {
  const { data, index } = props;
  const [isActive, setIsActive] = useState(false);
  const isActiveTab = isActive;
  return (
    <div>
      <div
        style={{
          backgroundColor: isActiveTab ? "#47b475" : "#fff",
          color: isActiveTab ? "white" : "black",
          border: isActiveTab ? "1px solid #ccc" : "none",
        }}
        className="Acco"
        onClick={() => setIsActive(!isActive)}
        key={`data-${index}`}
      >
        <div>{data.name}</div>
        {isActive && <p>{data.content}</p>}
      </div>
    </div>
  );
}
