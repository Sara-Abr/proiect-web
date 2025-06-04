'use client'
import React from 'react';
const Gallery: React.FC = () => {
  const images = [
  '/image_01211.jpg',
  '/nufar.jpg',
  '/dalia.jpg',
  ];

  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="galerie.tsx">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`flower-${index}`} className="galerie.rsx" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
