import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CartData.css';

const OneCard = ({ apiData }) => {
  const { id } = useParams();
  const newD = apiData.find(item => item.id.toString() === id);

  return (
    <div className="cart-container">
      {newD ? (
        <div className="cart-item" style={{height:'400px',width:'400px'}}>
          <img src={newD.image} alt={newD.name} />
          <p>Recipes: <i>{newD.name}</i> </p>
          <p>CaloriesPerServing: <i>{newD.caloriesPerServing}</i> </p>
          <p>Cuisine: <i>{newD.cuisine}</i></p>
          <p>Rating: <i>{newD.rating}</i></p>
          <p>ReviewCount: <i>{newD.reviewCount}</i></p>
        </div>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default OneCard;
