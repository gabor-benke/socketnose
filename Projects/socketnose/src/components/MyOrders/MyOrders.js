import { useState, useEffect } from 'react';
import axios from 'axios';
import './MyOrders.css';

const MyOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/my-orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching queried data:", err);
      });
  }, []);
  
  return (

    <div className="my-orders-container">

      <h2 className="my-orders-title">My ordered products</h2>

      <table className="my-orders-table">

        <thead className="my-orders-thead">
          <tr>
            <th>Order ID</th>
            <th>Product name</th>
            <th>Quantity (kgs)</th>
            <th>Price (HUF)</th>
            <th>Date entered</th>
          </tr>
        </thead>

        <tbody className="my-orders-tbody">
          {orders.map((order) => (
            <tr key={`${order.product_id}-${order.date}`}>
              <td>{order.id}</td>
              <td>{order.product_name}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
    
  );
    
};

export default MyOrders;