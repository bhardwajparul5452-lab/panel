import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Customers from "./components/Customers";
import Addproduct from "./components/Addproduct";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/Addproduct" element={<Addproduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}