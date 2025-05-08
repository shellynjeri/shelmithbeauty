import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Addproduct = () => {
  // Initialize product details hooks
  const [product_name, setProduct_Name] = useState("");
  const [product_description,setProduct_Description] = useState("");
  const [product_cost, setProduct_cost] = useState("");
  const [product_photo, setProduct_photo] = useState(null);
  const [product_category, setProduct_Category] = useState(""); // New state for category

  // Hooks for user information
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const submit = async (e) => {
    // Prevent reloading
    e.preventDefault();

    // Clear any previous messages
    setSuccess("");
    setError("");

    // Input validation
    if (!product_name || !product_description || !product_cost || !product_photo || !product_category) {
      setError("All fields are required!");
      return;
    }

    // Update Loading Hook
    setLoading("Please wait...");

    // Prepare the form data
    const data = new FormData();
    data.append("product_name", product_name);
    data.append("product_description", product_description);
    data.append("product_cost", product_cost);
    data.append("product_photo", product_photo);
    data.append("product_category", product_category); // Append the category

    try {
      // Send data to API
      const response = await axios.post("https://shellynjeri.pythonanywhere.com/api/add_product", data);
      setLoading("");
      setSuccess(response.data.message);

      // Reset form fields after success
      setProduct_Name("");
     setProduct_Description("");
      setProduct_cost("");
      setProduct_photo(null);
      setProduct_Category(""); // Reset category after successful submission

    } catch (error) {
      setLoading("");
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <hr />
      <div className="signupandin col-md-6 text-center p-4">
        <form onSubmit={submit}>
          {/* Display loading, error, and success messages */}
          <div>
            <span className="text-info">{loading}</span>
            <span className="text-danger">{error}</span>
            <span className="text-success">{success}</span>
          </div>

          {/* Product Name Input */}
          <input
            required
            type="text"
            placeholder="Product Name"
            className="form-control"
            value={product_name}
            onChange={(e) => setProduct_Name(e.target.value)}
          /><br />

          {/* Product Description Input */}
          <textarea
            required
            placeholder="Product Description"
            className="form-control"
            value={product_description}
            onChange={(e) =>setProduct_Description(e.target.value)}
          ></textarea><br />

          {/* Product Cost Input */}
          <input
            required
            type="number"
            placeholder="Product Cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => setProduct_cost(e.target.value)}
          /><br />

          {/* Product Category Selection (Radio Buttons) */}
          <div>
            <label>Select Product Category:</label><br />
            <input
              type="radio"
              id="skincare"
              name="product_category"
              value="skincare"
              checked={product_category === "skincare"}
              onChange={(e) => setProduct_Category(e.target.value)}
            />
            <label htmlFor="skincare" className="ml-2">Skincare</label><br />
            <input
              type="radio"
              id="makeup"
              name="product_category"
              value="makeup"
              checked={product_category === "makeup"}
              onChange={(e) => setProduct_Category(e.target.value)}
            />
            <label htmlFor="makeup" className="ml-2">Makeup</label><br />
            <input
              type="radio"
              id="accessories"
              name="product_category"
              value="accessories"
              checked={product_category === "accessories"}
              onChange={(e) => setProduct_Category(e.target.value)}
            />
            <label htmlFor="accessories" className="ml-2">Accessories</label><br />
          </div>

          {/* Product Image Input */}
          <label htmlFor="">Browse/Upload Image</label><br />
          <input
            required
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setProduct_photo(e.target.files[0])}
          /><br />

          {/* Submit Button */}
          <button type="submit" className="btn btn-secondary">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
