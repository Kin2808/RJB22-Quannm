import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export default function Multiopen(props) {
  const { data, index} = props;
  const [indexActive, setindexActive] = React.useState(false);
  return (
    <>
      {indexActive ? (
        <AiOutlinePlus></AiOutlinePlus>
      ) : (
        <AiOutlineMinus></AiOutlineMinus>
      )}
      <div key={index} onClick={() => setindexActive(!indexActive)}>
        {data.name}
        {indexActive && <div>{data.content}</div>}
      </div>
    </>
  );
}
