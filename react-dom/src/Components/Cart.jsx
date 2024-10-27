import React, { useContext } from 'react';
import Context from '../Context';

const Cart = () => {
  const { cart, dispatch } = useContext(Context); 

  const removeItem = (index) => {
    dispatch({
      type: 'remove',
      payload: index
    })
  };

  return (
    <div className="cart-container">
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <button style={{ backgroundColor: 'red' }} onClick={() => removeItem(index)}>
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
