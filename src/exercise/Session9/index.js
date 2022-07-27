import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "./page/Form";
import List from "./page/List";
import Nav from "./page/Nav";

export default function Session9() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<List />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
