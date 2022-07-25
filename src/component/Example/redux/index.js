import { Provider } from "react-redux";
import React from "react";
import Counts from "./Counts";
import store from "./store";
export default function Redux() {
  return (
    <Provider store={store}>
      <Counts />
    </Provider>
  );
}
