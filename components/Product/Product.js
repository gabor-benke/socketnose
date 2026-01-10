import { useState } from 'react';
import QtySelector from './QtySelector';
import Add from './Add';
import Clear from './Clear';
import './Product.css';

const Product = ({ product, basket, addToBasket, clearFromBasket }) => {

  // Defining states:

  const [ quantity, setQuantity ] = useState(0.5);

  // Returning the queried products one by one:

  return (

    <div className="product">

      <h2 className="product-name">{product.name}</h2>
      {/*<h4 className="product-code">Product code: {product.id}</h4>*/}
      <h4 className="unit-price">Unit price: HUF {product.unit_price} / kg</h4>

      <div className="selector-box"> 

        <QtySelector
          quantity={quantity}
          setQuantity={setQuantity} 
          basket={basket}
        />

        <Add
          quantity={quantity}
          addToBasket={addToBasket}
          productID={product.id}
        />

        <Clear 
          clearFromBasket={clearFromBasket}
          productID={product.id}
        />

      </div>

      <h4 className="added-to-cart">Added to cart: {basket[product.id] || 0} kgs</h4>

    </div>

  );

};

export default Product;