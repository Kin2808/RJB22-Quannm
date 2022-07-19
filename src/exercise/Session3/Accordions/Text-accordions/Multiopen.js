import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export default function Multiopen(props) {
  const { data, index } = props;
  const [indexActive, setindexActive] = React.useState(false);
  return (
    <>
      <div className="TA-info" key={index} onClick={() => setindexActive(!indexActive)}>
        <div className="TA">
        {indexActive ? (
          <AiOutlinePlus></AiOutlinePlus>
        ) : (
          <AiOutlineMinus></AiOutlineMinus>
        )}
        {data.name}
        </div>
        {indexActive && <p>{data.content}</p>}
      </div>
    </>
  );
}
