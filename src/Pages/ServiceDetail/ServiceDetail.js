import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data[serviceId - 1]));
  }, []);
  console.log(services);
  return (
    <div className="container serviceDetails">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={services.img} alt="" />
        </div>
        <div className="col-md-6 details">
          <h2>{services.name}</h2>
          <p>Price:{services.price}</p>
          <p>{services.description}</p>
          <Link className="btn" to="/checkout">
            {' '}
            checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
