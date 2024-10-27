import React, { useContext } from 'react';
import './CartData.css'; 
import Context from '../Context';

const CartData = ({apiData}) => {
   let{dispatch}= useContext(Context)
  //  console.log(dispatch);

  const addToCart=(item)=>{
    // console.log(item,"Item mill gyaaayayaa");
    dispatch({
      type: 'addItem',
      payload: item,
    })
  }
   
  return (
    <div className="cart-container">
      {
        apiData.map((val) => (
          <div className="cart-item">
            <img src={val.image}/>
            {/* <i>{val.title}</i> */}
            <p>{val.name}</p>
            <button onClick={()=>addToCart(val)}>Add To cart</button>
          </div>
        ))
      }
    </div>
  );
}

export default CartData;
