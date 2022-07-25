import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCountAction, increaseCountAction } from "./rootReducer";

export default function Counts() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(decreaseCountAction(1));
        }}
      >
        giam
      </button>
      <button
        onClick={() => {
          dispatch(increaseCountAction(1));
        }}
      >
        tang
      </button>
    </>
  );
}
