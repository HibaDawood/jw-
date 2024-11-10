'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    '/picture/s11.jpg',
    '/picture/s10.jpg',
    '/picture/s12.jpg',
    '/picture/s9.jpg',
    '/picture/s8.jpg',
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
          width={800}
          height={800}
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