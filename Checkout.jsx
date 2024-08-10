import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../store/orderSlice';
import './Checkout.css';

function Checkout() {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const cartItems = useSelector((state) => state.handleCart.cart);
  const dispatch = useDispatch();

  const calculateGrandTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBillingInfo({ ...billingInfo, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderSummary = cartItems.map((item) => ({
      title: item.product.title,
      quantity: item.quantity,
      price: item.product.price * item.quantity,
    }));
    const order = {
      billingInfo,
      orderSummary,
      total: calculateGrandTotal(),
    };
    dispatch(addOrder(order));
    // Optionally, you can clear the form or redirect the user
  };

  return (
    <div className="container checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-3">Billing Address</h4>
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={billingInfo.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={billingInfo.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={billingInfo.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={billingInfo.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                value={billingInfo.zip}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="w-100 btn btn-primary mt-3" type="submit">
              Proceed to Payment
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h4 className="mb-3">Order Summary</h4>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.product.id} className="list-group-item d-flex justify-content-between">
                <span>{item.product.title} (x{item.quantity})</span>
                <strong>₹{item.product.price * item.quantity}</strong>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <span>Total</span>
              <strong>₹{calculateGrandTotal()}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

