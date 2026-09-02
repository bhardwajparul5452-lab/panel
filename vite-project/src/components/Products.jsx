import "./Products.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Products() {

  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="page">

      <Header />

      <h2>Products</h2>

      <button className="add" onClick={handleAddProduct}>
        Add Product
      </button>

      {/* TUMHARE PRODUCT CARDS */}

    </div>
  )
}

      

     