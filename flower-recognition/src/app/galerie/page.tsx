'use client'
import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/anthurium.jpg', name: 'Floare 1', description: 'anthurium este o floare care poate avea multe culori' },
  { src: '/clematis.jpg', name: 'Floare 2', description: 'Aceasta este floarea 2.' },
  { src: '/nufar.jpg', name: 'Nufăr', description: 'Un nufăr frumos pe apă.' },
  { src: '/dalia.jpg', name: 'Floare 3', description: 'Descriere 3' },
  { src: '/gerbera.jpg', name: 'Floare 4', description: 'Descriere 4' },
  { src: '/gladiola.jpg', name: 'Floare 5', description: 'Descriere 5' },
  { src: '/hibiscus.jpg', name: 'Floare 6', description: 'Descriere 6' },
  { src: '/petunie.jpg', name: 'Floare 7', description: 'Descriere 7' },
  { src: '/paradise_bird.jpg', name: 'Floare 8', description: 'Descriere 8' },
  { src: '/flori/7.jpg', name: 'Floare 9', description: 'Descriere 9' },
  { src: '/flori/8.jpg', name: 'Floare 10', description: 'Descriere 10' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Galerie Foto</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
        {images.map((image, index) => (
          <div key={index} className="text-center cursor-pointer" onClick={() => setSelectedImage(image)}>
            <div className="relative w-full h-24">
              <Image
                src={image.src}
                alt={image.name}
                fill
                className="object-cover rounded shadow"
              />
            </div>
            <p className="mt-1 text-sm font-medium">{image.name}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
            <div className="relative w-full h-64 mb-4">
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-bold">{selectedImage.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
