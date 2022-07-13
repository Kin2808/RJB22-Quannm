import React, { useState } from "react";

export default function MultiAccordions(props) {
  const { data, index } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div onClick={() => setIsActive(!isActive)} key={`data-${index}`}>
        {data.name}
        {isActive && <div>{data.content}</div>}
      </div>
    </div>
  );
}
