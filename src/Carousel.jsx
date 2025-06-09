import React from 'react'

const Carousel = () => {

    const goToPrevious = () => {

    }

    const goToNext = () => {

    }

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <img src="{images[currentIndex]}"
      className="w-full h-64 object-cover rouded-lg" />

      <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2
       bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70">
        ‹
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2
       bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 ">
        ›
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_,index) => (
            <button key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? bg-black : bg-gray-500}`}></button>
        ))};
      </div>
    </div>
  );
};

export default Carousel
