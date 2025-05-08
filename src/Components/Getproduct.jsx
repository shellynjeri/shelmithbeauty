import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carouselcomponent from "./Carouselcomponent";

const Getproducts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const img_url = "https://shellynjeri.pythonanywhere.com/static/images/";

    const getproducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://shellynjeri.pythonanywhere.com/api/get_product_details");
            setProduct(response.data);
            setLoading(false);
            setError(""); // Clear any previous errors
        } catch (error) {
            setLoading(false);
            setError("Failed to load products. Please try again.");
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    const filtered_products = product.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
    );

    const user = JSON.parse(localStorage.getItem("user"));

    // Filter products by category (Corrected to match your API field)
    const skincareProducts = filtered_products.filter(item => item.product_category === "skincare");
    const makeupProducts = filtered_products.filter(item => item.product_category === "makeup");
    const accessoriesProducts = filtered_products.filter(item => item.product_category === "accessories");

    return (
        <div>
            <Carouselcomponent />
            <div className="row container-fluid mt-2">
                <p className="text-right">Welcome back: {user?.username}</p>
                <hr className="bg-danger" />
                
                {/* Loading Indicator */}
                {loading && (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && <div className="alert alert-danger">{error}</div>}

                <h3>Available Products</h3>

                {/* Search Bar */}
                <div className="row justify-content-center mt-3 mb-3 text-center">
                    <input 
                        className="form-control w-50" 
                        type="search" 
                        placeholder="Search Products..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} // Fixed error
                    />
                </div>

                {/* Skincare Products */}
                <h4 className="text-center">Skincare</h4>
                <div className="row">
                    {skincareProducts.map((product) => (
                        <div key={product.id} className="col-md-3 mb-4 mt-3">
                            <div className="card shadow text-center">
                                <img 
                                    src={img_url + product.product_photo} 
                                    alt={product.product_name} 
                                    className="product_img" 
                                />
                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description.slice(0, 30)}...</p>
                                    <b className="text-danger">{product.product_cost}</b>
                                    
                                    <br />
                                    <button 
                                        onClick={() => navigate("/makepayment", { state: { img_url, product } })} 
                                        className="btn btn-success"
                                    >
                                        Make Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Makeup Products */}
                <h4 className="text-center">Makeup</h4>
                <div className="row">
                    {makeupProducts.map((product) => (
                        <div key={product.id} className="col-md-3 mb-4 mt-3">
                            <div className="card shadow text-center">
                                <img 
                                    src={img_url + product.product_photo} 
                                    alt={product.product_name} 
                                    className="product_img" 
                                />
                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description.slice(0, 30)}...</p>
                                    <b className="text-danger">{product.product_cost}</b>
                                    <br />
                                    <button 
                                        onClick={() => navigate("/makepayment", { state: { img_url, product } })} 
                                        className="btn btn-success"
                                    >
                                        Make Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Accessories Products */}
                <h4 className="text-center">Accessories</h4>
                <div className="row">
                    {accessoriesProducts.map((product) => (
                        <div key={product.id} className="col-md-3 mb-4 mt-3">
                            <div className="card shadow text-center">
                                <img 
                                    src={img_url + product.product_photo} 
                                    alt={product.product_name} 
                                    className="product_img" 
                                />
                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description.slice(0, 30)}...</p>
                                    <b className="text-danger">{product.product_cost}</b>
                                    <br />
                                    <button 
                                        onClick={() => navigate("/makepayment", { state: { img_url, product } })} 
                                        className="btn btn-success"
                                    >
                                        Make Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Getproducts;
