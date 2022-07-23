import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./page/component/Header";
import Navigation from "./page/component/Navigation";
import Customer from "./page/Customer/Customer";
import CustomerForm from "./page/Customer/CustomerForm";
import CustomerList from "./page/Customer/CustomerList";
import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import ProductForm from "./page/Product/ProductForm";
import ProductList from "./page/Product/ProductList";

export default function Session8() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: 1200}} className="row">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="customer" element={<Customer />}>
            <Route index element={<CustomerList />} />
            <Route path="list" element={<CustomerList />} />
            <Route path="detail/:id" element={<CustomerForm />} />
            <Route path="form" element={<CustomerForm />} />
            <Route path="edit/:id" element={<CustomerForm />} />
          </Route>

          <Route path="product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="detail/:id" element={<ProductForm />} />
            <Route path="form" element={<ProductForm />} />
            <Route path="edit/:id" element={<ProductForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
