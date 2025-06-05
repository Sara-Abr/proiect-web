'use client';

import { useState } from 'react';
import Image from 'next/image';

type ImageType = {
  src: string;
  name: string;
  description: string;
};

const images: ImageType[] = [
  { src: '/craciunita.jpg', name: 'craciunita', description: 'Aceasta este craciunita, cea mai cunoscuta floare in timpul sarbatorilor de iarna.' },
  { src: '/dalia.jpg', name: 'dalia', description: 'Aceasta floare colorata iti va face primavara si gradina mai frumoasa.' },
  { src: '/nufar.jpg', name: 'Nufăr', description: 'Un nufăr frumos pe apă.' },
  { src: '/gerbera.jpg', name: 'gerbera', description: 'Descriere 3' },
  { src: '/gladiola.jpg', name: 'gladiola', description: 'Descriere 4' },
  { src: '/hibiscus.jpg', name: 'hibiscus', description: 'Descriere 5' },
  { src: '/paradise_bird.jpg', name: 'paradise_bird', description: 'O floare care te duce cu gandul la vacante.' },
  { src: '/petunir.jpg', name: 'petunie', description: 'Descriere 7' },
  { src: '/regina_noptii.jpg', name: 'regina noptii', description: 'Cea mai frumoasa floare din timpul noptii.' },
  { src: '/trandafir.jpg', name: 'trandafir', description: 'Descriere 9' },
  { src: '/clematis.jpg', name: 'clematis', description: 'Descriere 10' },
];

const IMAGES_PER_ROW = 5;
const VISIBLE_ROWS = 2;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Galerie Foto</h2>

      {/* Scroll vertical */}
      <div
        className="overflow-y-auto border border-gray-300 rounded p-2"
        style={{
          maxHeight: `${VISIBLE_ROWS * 12}rem`, // înălțimea containerului ca să încapă fix 2 rânduri (aprox 12rem pe rând)
        }}
      >
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${IMAGES_PER_ROW}, 1fr)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer text-center"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-24 mx-auto">
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className="object-cover rounded shadow"
                  unoptimized
                />
              </div>
              <p className="mt-2 text-sm font-medium">{image.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
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
                unoptimized
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