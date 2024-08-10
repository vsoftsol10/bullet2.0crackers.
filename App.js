// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Adjust path if necessary
import Footer from './components/Footer'; // Adjust path if necessary
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AdminPanel from './components/admin/AdminPanel'; // Adjust path if necessary
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* Public Routes */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>

        {/* Admin Routes */}
        <Route exact path="/admin/adminpanel">
          <AdminPanel />
        </Route>
        <Route exact path="/admin/adminpanel/orders">
          <AdminPanel />
        </Route>
        <Route exact path="/admin/adminpanel/products">
          <AdminPanel />
        </Route>

        {/* Fallback Route */}
        <Route>
          <div>404 Page Not Found</div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

