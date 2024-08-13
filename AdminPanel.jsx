import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import './AdminPanel.css'; // Import CSS file for styling

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProductData, setNewProductData] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const json = JSON.parse(e.target.result);
          await updateFirestoreWithJson(json);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const updateFirestoreWithJson = async (json) => {
    try {
      const productsRef = collection(db, "products");

      // Clear existing products
      const querySnapshot = await getDocs(productsRef);
      for (const doc of querySnapshot.docs) {
        await deleteDoc(doc.ref);
      }

      // Add new products from JSON
      for (const product of json) {
        await addDoc(productsRef, product);
      }

      // Refresh product list after updating
      const updatedQuerySnapshot = await getDocs(productsRef);
      const updatedProductsList = updatedQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(updatedProductsList);
    } catch (error) {
      console.error("Error updating Firestore with JSON:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const productRef = doc(db, "products", id);
      await deleteDoc(productRef);

      // Refresh the product list
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setNewProductData(product);
  };


const handleChange = (e) => {
  const { name, value } = e.target;
  if (name.startsWith('rating.')) {
    const key = name.split('.')[1];
    setNewProductData((prevData) => ({
      ...prevData,
      rating: { ...prevData.rating, [key]: parseFloat(value) }
    }));
  } else {
    setNewProductData((prevData) => ({ ...prevData, [name]: value }));
  }
};

const handleSave = async () => {
  console.log('Save Changes button clicked'); // Debugging line
  if (editingProduct) {
    try {
      const productRef = doc(db, "products", editingProduct);
      console.log("Updating document ID:", editingProduct);
      console.log("New data:", newProductData);
      await updateDoc(productRef, newProductData);

      console.log("Document updated successfully");

      // Refresh the product list
      const updatedQuerySnapshot = await getDocs(collection(db, "products"));
      const updatedProductsList = updatedQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(updatedProductsList);
      setEditingProduct(null);
      setNewProductData({});
    } catch (error) {
      console.error("Error saving product changes:", error);
    }
  }
};



  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
        <h2>Admin Panel</h2>
        <input type="file" accept=".json" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload Products</button>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>Existing Products</h3>
            <div className="product-grid">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  {editingProduct === product.id ? (
                    <div>
                      <form>
                        <label>
                          Title:
                          <input
                            type="text"
                            name="title"
                            value={newProductData.title || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Price:
                          <input
                            type="number"
                            name="price"
                            value={newProductData.price || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Description:
                          <input
                            type="text"
                            name="description"
                            value={newProductData.description || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Category:
                          <input
                            type="text"
                            name="category"
                            value={newProductData.category || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Image URL:
                          <input
                            type="text"
                            name="image"
                            value={newProductData.image || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Rating Rate:
                          <input
                            type="number"
                            name="rating.rate"
                            step="0.1"
                            value={newProductData.rating?.rate || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Rating Count:
                          <input
                            type="number"
                            name="rating.count"
                            value={newProductData.rating?.count || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <button type="button" onClick={handleSave}>Save Changes</button>
                        <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <img src={product.image} alt={product.title} className="product-image" />
                      <h4>{product.title}</h4>
                      <table className="product-table">
                        <tbody>
                          <tr>
                            <td>Price:</td>
                            <td>₹{product.price}</td>
                          </tr>
                          <tr>
                            <td>Category:</td>
                            <td>{product.category}</td>
                          </tr>
                          <tr>
                            <td>Rating:</td>
                            <td>{product.rating?.rate} (based on {product.rating?.count} reviews)</td>
                          </tr>
                        </tbody>
                      </table>
                      <button onClick={() => handleDelete(product.id)}>Delete</button>
                      <button onClick={() => handleEdit(product)}>Edit</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
