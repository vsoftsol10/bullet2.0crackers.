// src/components/Cart.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./cart/CartProduct";
import AuthModal from "./AuthModal"; // Corrected path
import { useFirestore } from "../FirestoreContext"; // Adjusted path

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const db = useFirestore(); // Get Firestore instance from context

  // Calculate total price using reduce
  const total = state.reduce((acc, cartProduct) => acc + cartProduct.sub_total, 0);

  const handleCheckout = async () => {
    // Replace this with your actual authentication check
    const userIsLoggedIn = false; // Example: Check from state or context

    if (!userIsLoggedIn) {
      setShowModal(true);
    } else {
      // Collect order details
      const orderDetails = {
        personName: "Placeholder Name", // Replace with actual data
        address: "Placeholder Address", // Replace with actual data
        placeOfDelivery: "Placeholder Place", // Replace with actual data
        phoneNumber: "0000000000", // Replace with actual data
        paymentMethod: "Placeholder Method", // Replace with actual data
        productName: state.map(product => product.title).join(', '),
        orderCount: state.length,
        orderDate: new Date().toISOString(), // ISO format for timestamp
        total
      };

      try {
        // Add order details to Firestore
        await db.collection('orders').add(orderDetails);
        alert('Order submitted successfully!');
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <div className="cartContainer container">
      <div className="row">
        <div className="col-md-6">
          {state.length === 0 ? (
            <div className="emptyCart container text-center">
              <h1 className="row heading m-3 text-center">Your Cart is Empty...!</h1>
              <div className="row text-center">
                <Link to="/products" className="btn btn-large btn-primary">
                  Start Shopping...
                </Link>
              </div>
            </div>
          ) : (
            state.map((cartProduct) => (
              <CartProduct key={cartProduct.id} cartProduct={cartProduct} dispatch={dispatch} />
            ))
          )}
        </div>
        {state.length > 0 && (
          <div className="col-md-6 statusContainer">
            <h2>Cart Status</h2>
            <div className="total">₹ {parseFloat(total).toFixed(2)}</div>
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <AuthModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}
