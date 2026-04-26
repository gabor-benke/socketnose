import './Clear.css';

const Clear = ({ clearFromBasket, productID }) => {

  return (
    <button className="clear-button"
      onClick={() => {clearFromBasket(productID)}}
    >Clear
    </button>
  );

};

export default Clear;