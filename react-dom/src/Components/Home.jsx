import React, { useEffect } from 'react';
import './CartData.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ apiData, setApiData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.recipes);
      }); 
  }, [setApiData]);

  const handleClick = (id) => {
    navigate(`/cart/${id}`); 
  };

  return (
    <div className="cart-container">
      {apiData.map((val, id) => (
        <div className="cart-item" key={id} onClick={() => handleClick(id)}>
          <img src={val.image}/> 
          <p>{val.name}</p>
          <button>View more</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
