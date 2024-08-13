import React from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import SideMenu from './SideMenu'; // Ensure this is the correct path
import AdminPanel from './AdminPanel'; // Ensure this is the correct path
import Orders from './Orders'; // Ensure this is the correct path
import Dashboard from './Dashboard'; // Ensure this is the correct path
import Customers from './Customers'; // Ensure this is the correct path

import './AdminRouter.css'; // Adjust path if necessary

const AdminRouter = () => {
  const history = useHistory();
  const location = useLocation();
  const isDashboard = location.pathname === '/admin/dashboard';

  const username = 'Admin';
  const handleLogout = () => {
    console.log('Logged out');
    history.push('/');
  };

  return (
    <div className="admin-container">
      {!isDashboard && <SideMenu />}
      <div className={`admin-content ${isDashboard ? 'no-sidebar' : 'with-sidebar'}`}>
        <div className="admin-header">
          <h1 className="admin-heading">Admin Panel</h1>
          <div className="admin-user-info">
            <span className="username">Welcome, {username}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        {/* Admin Routes */}
        <Switch>
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/products" component={AdminPanel} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/customers" component={Customers} />

          <Redirect from="/admin" to="/admin/dashboard" />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRouter;
