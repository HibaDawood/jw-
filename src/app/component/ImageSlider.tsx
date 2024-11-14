'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    '/picture/5.jpg',
    '/picture/1.jpg',
    '/picture/2.jpg',
    '/picture/7.jpg',
    '/picture/9.jpg',
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="arrow prev" onClick={prevSlide}>
          &#10094;
        </button>
        <Image
          src={images[currentIndex]}
          alt="slider"
          width={400}
          height={400}
          className="slider-image"
        />
        <button className="arrow next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;