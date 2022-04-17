import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  // console.log(service);
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img className="img-fluid" src={img} alt="" />
      <div className='details'>
        <h2>{name}</h2>
        <p>Price:{price}</p>
        <p>{description}</p>
        <button onClick={() => navigateToServiceDetail(id)} className="book">
          {name}
        </button>
      </div>
    </div>
  );
};

export default Service;
