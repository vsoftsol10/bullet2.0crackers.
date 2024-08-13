import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import './Orders.css'; // Import the CSS file

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'checkouts'));
        const ordersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleViewDetails = (id) => {
    setSelectedOrderId(id === selectedOrderId ? null : id);
  };

  const handleDeliveryChange = async (id, isDelivered) => {
    try {
      const orderRef = doc(db, 'checkouts', id);
      await updateDoc(orderRef, { delivered: isDelivered });
      setOrders(orders.map(order => 
        order.id === id ? { ...order, delivered: isDelivered } : order
      ));
    } catch (error) {
      console.error('Error updating delivery status:', error);
    }
  };

  return (
    <div className="orders-container">
      <h2>Orders Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {orders.length === 0 ? (
            <p>No orders found</p>
          ) : (
            <>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Delivery</th> {/* New column for Delivery */}
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.billingInfo ? `${order.billingInfo.firstName || ''} ${order.billingInfo.lastName || ''}` : 'N/A'}</td>
                      <td>{order.orderSummary ? order.orderSummary.map(item => item.title).join(', ') : 'N/A'}</td>
                      <td>{order.orderSummary ? order.orderSummary.reduce((total, item) => total + (item.quantity || 0), 0) : 'N/A'}</td>
                      <td>₹{order.total || 'N/A'}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={order.delivered || false}
                          onChange={(e) => handleDeliveryChange(order.id, e.target.checked)}
                        />
                        {order.delivered ? ' Delivered' : ' Not Delivered'}
                      </td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => handleViewDetails(order.id)}
                        >
                          {selectedOrderId === order.id ? 'Hide Details' : 'View Details'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders
                .filter(order => order.id === selectedOrderId)
                .map(order => (
                  <div key={order.id}>
                    <h3>Order Details</h3>
                    <p><strong>First Name:</strong> {order.billingInfo?.firstName || 'N/A'}</p>
                    <p><strong>Last Name:</strong> {order.billingInfo?.lastName || 'N/A'}</p>
                    <p><strong>Email:</strong> {order.billingInfo?.email || 'N/A'}</p>
                    <p><strong>Address:</strong> {order.billingInfo?.address || 'N/A'}</p>
                    <p><strong>City:</strong> {order.billingInfo?.city || 'N/A'}</p>
                    <p><strong>State:</strong> {order.billingInfo?.state || 'N/A'}</p>
                    <p><strong>Zip:</strong> {order.billingInfo?.zip || 'N/A'}</p>
                    <p><strong>Transaction ID:</strong> {order.billingInfo?.transaction_id || 'N/A'}</p>
                    <h4>Order Summary:</h4>
                    <table className="order-summary-table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.orderSummary ? order.orderSummary.map((item, index) => (
                          <tr key={index}>
                            <td>{item.title || 'N/A'}</td>
                            <td>{item.quantity || 'N/A'}</td>
                            <td>₹{item.price || 'N/A'}</td>
                          </tr>
                        )) : <tr><td colSpan="3">No summary available</td></tr>}
                      </tbody>
                    </table>
                    <p><strong>Total Amount:</strong> ₹{order.total || 'N/A'}</p>
                  </div>
                ))
              }
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
