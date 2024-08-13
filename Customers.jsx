import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import './Customers.css'; // Import the CSS file

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'customers')); // Assuming you have a "customers" collection
        const customersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCustomers(customersList);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="customers-container">
      <h2>Customers</h2>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <table className="customers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Reviews</th>
              <th>Rating</th>
              <th>Login Date</th>
              <th>Signup Date</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td></td> {/* Empty column for Reviews */}
                <td></td> {/* Empty column for Ratings */}
                <td></td> {/* Empty column for Login Date */}
                <td></td> {/* Empty column for Signup Date */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Customers;
