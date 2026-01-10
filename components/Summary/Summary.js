import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Submit from '../Submit/Submit';
import './Summary.css';

const Summary = ({ products, basket }) => {
  
  const [ orderStatus, setOrderStatus ] = useState(null);
  const navigate = useNavigate();

  const summarizedItems = products
  .filter(product => basket[product.id])
  .map(prod => ({
    product_id: prod.id,
    product_name: prod.name,
    unit_price: prod.unit_price,
    quantity: basket[prod.id],
    price: prod.unit_price * basket[prod.id],
    date: new Date().toISOString(),
  }));

  const submitOrder = async () => {

    try {
      const response = await fetch('http://localhost:9090/my-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: summarizedItems }),
      });

      if (response.ok) {
        setOrderStatus('OK');
      }
      else {
        setOrderStatus('Error');
      }
    } 

    catch (error) {
      console.error('Submit failed:', error);
      setOrderStatus('error');
    }

    console.log(summarizedItems);

  };

  // useEffect:

  useEffect(() => {
    if (orderStatus === 'OK') {
      navigate('/my-orders');
    }
  }, [orderStatus, navigate]);

  
  return (

    <div className="summary-container">

      <h2 className="summary-header">Cart Summary</h2>

      <table className="summary-table">
        <thead className="summary-thead">
          <tr>
            <th>Product name</th>
            <th>Unit price (HUF)</th>
            <th>Quantity (kgs)</th>
            <th>Price (HUF)</th>
          </tr>
        </thead>
        <tbody className="summary-tbody">
          {summarizedItems.map(product => (
            <tr key={product.id}>
              <td>{product.product_name}</td>
              <td>{product.unit_price}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Submit 
        submitOrder={submitOrder}
        basket={basket}
        products={products}
      />

    </div>

  );
};

export default Summary;