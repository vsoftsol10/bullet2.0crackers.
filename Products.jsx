import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action"; // Ensure this path is correct
import Loading from './Loading'; // Ensure this path is correct
import "./Products.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [totals, setTotals] = useState({});
  const productsRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const cartItems = useSelector((state) => state.handleCart.cart);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("/products.json");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const handleQuantityChange = (product, quantity) => {
    const validQuantity = quantity < 0 ? 0 : quantity; // Ensure quantity is non-negative
    const updatedQuantities = { ...quantities, [product.id]: validQuantity };
    const updatedTotals = { ...totals, [product.id]: product.price * validQuantity };
    setQuantities(updatedQuantities);
    setTotals(updatedTotals);
    dispatch(addCart(product, validQuantity));
  };

  const handleQuantityIncrement = (product) => {
    const newQuantity = (quantities[product.id] || 0) + 1;
    handleQuantityChange(product, newQuantity);
  };

  const handleQuantityDecrement = (product) => {
    const newQuantity = (quantities[product.id] || 0) - 1;
    handleQuantityChange(product, newQuantity);
  };

  const calculateGrandTotal = () => {
    return Object.values(totals).reduce((acc, curr) => acc + curr, 0);
  };

  const randomizePosition = () => {
    const top = Math.random() * 80 + 10; // 10% to 90% of viewport height
    const left = Math.random() * 80 + 10; // 10% to 90% of viewport width
    return { top: `${top}vh`, left: `${left}vw` };
  };

  const filterProduct = (category) => {
    const updatedList = data.filter((product) => product.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons">
        <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>
          All
        </button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("Rockets")}>
          Rockets
        </button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("Sparklers")}>
          Sparklers
        </button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("Gift pack")}>
          Gift pack
        </button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("Bombs")}>
          Bombs
        </button>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h2 className="total-heading">Grand Total: ₹{calculateGrandTotal()}</h2>
            <button
              className="btn btn-primary"
              onClick={() => history.push("/Checkout")}
            >
              Go to Cart
            </button>
          </div>
          <table className="table table-bordered table-bg">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th className="content-cell">Content</th>
                <th>Actual Price</th>
                <th>Amount</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {filter.map((product) => (
                <tr key={product.id}>
                  <td data-label="Image">
                    <img src={product.image} className="product-img-table" alt={product.title} />
                  </td>
                  <td data-label="Product Name">{product.title}</td>
                  <td data-label="Content" className="content-cell">1 box</td> {/* Update content here */}
                  <td data-label="Actual Price">₹{product.price}</td>
                  <td data-label="Amount">₹{product.price}</td>
                  <td data-label="Quantity">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityDecrement(product)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantities[product.id] || 0}
                        min="0"
                        onChange={(e) => handleQuantityChange(product, parseInt(e.target.value, 10))}
                        className="quantity-input"
                        style={{ width: '60px' }} // Set width to limit input field size
                      />
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityIncrement(product)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td data-label="Total">₹{totals[product.id] || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  return (
    <div className="container my-5 py-5">
      {location.pathname === "/products" && (
        <div className="row">
          <div className="col-12 mb-6">
            <div className="text-center">
              <h1 className="display-6 fw-bolder animated-section" ref={productsRef}>
                Our Products
              </h1>
            </div>
            <hr />
          </div>
        </div>
      )}
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
      <div id="fireworks-container" className="fireworks-container"></div>
      {filter.map((_, index) => {
        const { top, left } = randomizePosition();
        return (
          <img
            key={index}
            src="/assets/rocketsgif.gif"
            alt="Rocket GIF"
            className="rocket-gif"
            style={{ top, left }}
          />
        );
      })}
    </div>
  );
}

