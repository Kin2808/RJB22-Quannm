import React, { useState } from "react";

export default function MultiAccordions(props) {
  const { data, index } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="Acco" onClick={() => setIsActive(!isActive)} key={`data-${index}`}>
        <button>{data.name}</button>
        {isActive && <div>{data.content}</div>}
      </div>
    </div>
  );
}
