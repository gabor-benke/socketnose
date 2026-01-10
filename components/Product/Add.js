import './Add.css';

const Add = ({ quantity, productID, addToBasket }) => {

  return (

    <button className="add-button"
      onClick={() => {addToBasket(productID, quantity)}}
    >
    Add
    </button>
    
  );

};

export default Add;