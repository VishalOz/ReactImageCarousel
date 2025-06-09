import React from 'react'
import Carousel from './Carousel'

const App = () => {
  const images = [
    "./assets/img1.jpg",
    "./assets/img2.jpg",
    "./assets/img3.jpg",
    "./assets/img4.jpg",
    "./assets/img5.jpg"
  ];
  
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App
