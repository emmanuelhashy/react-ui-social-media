import React, { useState } from 'react';

const images = [
    { id: 1, src: '1.jpeg', title: 'Beautiful Landscape', description: 'A serene view of the mountains.' },
    { id: 2, src: '2.jpeg', title: 'City Lights', description: 'The city illuminated at night.'},
    { id: 3, src: '3.jpeg', title: 'Forest Trail', description: 'A peaceful walk in the woods.'},
    { id: 4, src: '4.jpeg', title: 'Ocean Breeze', description: 'A breathtaking view of the ocean.'},
    { id: 5, src: '5.jpeg', title: 'Snowy Peaks', description: 'Snow-covered mountains in the distance.'},
    { id: 6, src: '6.jpeg', title: 'Desert Dunes', description: 'Golden sands stretching to the horizon.'},
  ];


const getImage = (imageName) => {
    return require(`../../assets/${imageName}`);
  };

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#051115] flex justify-center items-center">
      <div className="gallery grid grid-cols-5 grid-rows-[380px_280px] gap-2 w-full max-w-5xl p-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="card relative overflow-hidden rounded-lg border border-gray-600"
            onClick={() => openModal(image)}
          >
            <img src={getImage(image.src)} alt="" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative rounded-lg w-4/5 h-60 max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-100"
              onClick={closeModal}
            >
              ✕
            </button>
            <img src={getImage(selectedImage.src)} alt={selectedImage.title} className="w-full h-full object-cover rounded" />
            <div className='absolute bottom-4 left-4 text-white'>
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-100 mb-4">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
