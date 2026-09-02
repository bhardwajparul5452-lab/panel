//import React, { useRef, useState } from "react";
import "./AddProduct.css";

const categories = [
  "Air Conditioners",
  "Refrigerators",
  "Washing Machines",
  "Televisions",
  "Electronics",
  "Spare Parts",
  "Grocery",
  "Medicine",
  "Clothes",
  "Shoes",
];

const AddProduct = ({ onClose, onAddProduct }) => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "Air Conditioners",
    sku: "",
    price: "",
    discount: "0",
    stockQuantity: "",
    lowStockLimit: "",
    brand: "",
    warranty: "",
    returnPolicy: "",
  });

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [images, setImages] = useState([]);

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Select category
  const handleCategorySelect = (category) => {
    setFormData((prev) => ({
      ...prev,
      category,
    }));

    setCategoryOpen(false);
  };

  // Upload images
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) => {
      const isImage = file.type === "image/png" || 
                      file.type === "image/jpeg";

      const isUnder5MB = file.size <= 5 * 1024 * 1024;

      return isImage && isUnder5MB;
    });

    const newImages = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);

    // Allow selecting same image again
    e.target.value = "";
  };

  // Remove uploaded image
  const removeImage = (index) => {
    setImages((prev) => {
      const updated = [...prev];

      URL.revokeObjectURL(updated[index].preview);

      updated.splice(index, 1);

      return updated;
    });
  };

  // Submit product
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...formData,
      images: images.map((image) => image.file),
    };

    console.log("Product:", product);

    // If parent page provides a function
    if (onAddProduct) {
      onAddProduct(product);
    }

    // You can remove this alert when connecting backend
    alert("Product added successfully!");

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="add-product-overlay">

      <div className="add-product-modal">

        {/* ================= HEADER ================= */}

        <div className="add-product-header">

          <div>
            <h2>Add product</h2>

            <p>
              Fill in the product details. Fields marked with{" "}
              <span>*</span> are required.
            </p>
          </div>

          <button
            type="button"
            className="add-product-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

        </div>

        {/* ================= FORM ================= */}

        <form
          className="add-product-form"
          onSubmit={handleSubmit}
        >

          {/* PRODUCT NAME */}

          <div className="add-product-field full">

            <label>
              Product name <span>*</span>
            </label>

            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Voltas 1.5 Ton 3 Star Split AC"
              required
            />

          </div>


          {/* DESCRIPTION */}

          <div className="add-product-field full">

            <label>
              Product description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Key features, warranty, installation details..."
              rows={3}
            />

          </div>


          {/* CATEGORY + SKU */}

          <div className="add-product-row">

            {/* CATEGORY */}

            <div className="add-product-field">

              <label>
                Category
              </label>

              <div className="add-product-select-wrapper">

                <button
                  type="button"
                  className={`add-product-select ${
                    categoryOpen ? "select-active" : ""
                  }`}
                  onClick={() =>
                    setCategoryOpen(!categoryOpen)
                  }
                >

                  <span>
                    {formData.category}
                  </span>

                  <span
                    className={`select-arrow ${
                      categoryOpen ? "arrow-up" : ""
                    }`}
                  >
                    ▾
                  </span>

                </button>


                {categoryOpen && (
                  <div className="add-product-dropdown">

                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category}
                        className={`dropdown-option ${
                          formData.category === category
                            ? "selected-option"
                            : ""
                        }`}
                        onClick={() =>
                          handleCategorySelect(category)
                        }
                      >
                        {category}
                      </button>
                    ))}

                  </div>
                )}

              </div>

            </div>


            {/* SKU */}

            <div className="add-product-field">

              <label>
                SKU <span>*</span>
              </label>

              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="VLT-AC-153"
                required
              />

            </div>

          </div>


          {/* PRICE + DISCOUNT */}

          <div className="add-product-row">

            <div className="add-product-field">

              <label>
                Price (₹) <span>*</span>
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="32990"
                min="0"
                required
              />

            </div>


            <div className="add-product-field">

              <label>
                Discount (%)
              </label>

              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                placeholder="0"
                min="0"
                max="100"
              />

            </div>

          </div>


          {/* STOCK + LOW STOCK */}

          <div className="add-product-row">

            <div className="add-product-field">

              <label>
                Stock quantity
              </label>

              <input
                type="number"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                placeholder="25"
                min="0"
              />

            </div>


            <div className="add-product-field">

              <label>
                Low stock limit
              </label>

              <input
                type="number"
                name="lowStockLimit"
                value={formData.lowStockLimit}
                onChange={handleChange}
                placeholder="10"
                min="0"
              />

            </div>

          </div>


          {/* ================= IMAGES ================= */}

          <div className="add-product-field full image-field">

            <label>
              Product images
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg"
              multiple
              hidden
              onChange={handleImageUpload}
            />


            <div
              className="product-upload-box"
              onClick={() =>
                fileInputRef.current?.click()
              }
            >

              <div className="upload-image-icon">

                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >

                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <circle
                    cx="8"
                    cy="9"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M4 17L9 12L13 16L16 13L20 17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M18 3V8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M15.5 5.5H20.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                </svg>

              </div>


              <div className="upload-main-text">
                Upload product images
              </div>

              <div className="upload-help-text">
                PNG or JPG up to 5 MB each
              </div>

            </div>


            {/* IMAGE PREVIEWS */}

            {images.length > 0 && (

              <div className="uploaded-images">

                {images.map((image, index) => (

                  <div
                    className="uploaded-image"
                    key={index}
                  >

                    <img
                      src={image.preview}
                      alt={`Product ${index + 1}`}
                    />

                    <button
                      type="button"
                      className="remove-image"
                      onClick={() =>
                        removeImage(index)
                      }
                    >
                      ×
                    </button>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* ================= EXTRA FIELDS ================= */}

          <div className="add-product-row">

            <div className="add-product-field">

              <label>
                Brand
              </label>

              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Voltas"
              />

            </div>


            <div className="add-product-field">

              <label>
                Warranty
              </label>

              <input
                type="text"
                name="warranty"
                value={formData.warranty}
                onChange={handleChange}
                placeholder="1 Year"
              />

            </div>

          </div>


          {/* RETURN POLICY */}

          <div className="add-product-field full">

            <label>
              Return / Exchange Policy
            </label>

            <textarea
              name="returnPolicy"
              value={formData.returnPolicy}
              onChange={handleChange}
              placeholder="Enter return or exchange policy..."
              rows={3}
            />

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="add-product-actions">

            <button
              type="button"
              className="add-product-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-product-submit"
            >
              Add product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;