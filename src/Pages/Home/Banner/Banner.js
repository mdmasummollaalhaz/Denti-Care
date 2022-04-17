import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../Images/Banners/banner1.jpg'
import banner2 from '../../../Images/Banners/banner2.jpg'
import banner3 from '../../../Images/Banners/banner3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100 img-fluid"
            src={banner1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className='sub-title'>Committed To Excellence</h3>
            <h1 className='Title'>Personalized & Comfortable</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 className='sub-title'>Care For Lifetime</h3>
            <h1 className='Title'>Let Us Brighten Your Smile</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className='sub-title'>Care For Your Smile</h3>
            <h1 className='Title'>Committed To Excellence</h1>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
};

export default Banner;