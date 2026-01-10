import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product.js';
import Summary from '../Summary/Summary.js';
import './ProductList.css';

const ProductList = () => {

  // Defining states:

  const [ products, setProducts ] = useState([]);
  const [ basket, setBasket ] = useState({});

  // Fetching the products from database through the API:

  useEffect(() => {
    axios.get("http://localhost:9090/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching queried data:", err);
      });
  }, []);

  // Helper functions:

  const addToBasket = (productId, qty) => {
    setBasket((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + qty,
    }));
  };

  const clearFromBasket = (productId) => {
    setBasket((prevCart) => ({
      ...prevCart,
      [productId]: 0,
    }));
  };

  // Returning the product list:

  return (
    
    <div className="product-list">

      <h1 className="product-list-title">Product List</h1>

      <div className="product-list-content">

        {products.map((prod) => (
        <Product
          key={prod.id}
          product={prod}
          addToBasket={addToBasket}
          clearFromBasket={clearFromBasket}
          basket={basket}
        />
        ))}

      </div>

      <div className="summary-box">

        <Summary
          products={products}
          basket={basket}
        />

      </div>
        
    </div>
  );
    
};

export default ProductList;