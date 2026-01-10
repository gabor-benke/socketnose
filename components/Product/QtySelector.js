import './QtySelector.css';

const QtySelector = ({ quantity, setQuantity }) => {

  // Helper functions:

  const handleIncrease = () => {
    if (quantity + 0.5 <= 10) {
      setQuantity(previous => previous + 0.5);
    }
    else {
      setQuantity(0);
    }
  };

  const handleDecrease = () => {
    if (quantity - 0.5 >= 0.5) {
      setQuantity(previous => (
        previous >= 0.5 ? previous - 0.5 : 0
      ));
    }
  };

  // Rendering:

    return (
      
      <div className="qty-selector">

        <button className="decrease-button"
          onClick={handleDecrease}
        >
          -
        </button>
        <input className="quantity-input"
          type='number'
          step='0.5'
          placeholder='0.5'
          value={quantity}
        >
        </input>
        <button className="increase-button"
          onClick={handleIncrease}
        >
          +
        </button>

      </div>

    );

};

export default QtySelector;