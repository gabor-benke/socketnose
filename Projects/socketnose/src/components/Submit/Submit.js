import './Submit.css';

const Submit = ({ basket, products, submitOrder }) => {

  return (
    <button
      className="submit-button"
      onClick={submitOrder}
      basket={basket}
      products={products}
    >
      Submit
    </button>
  );

};

export default Submit;