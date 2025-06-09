import React from 'react'
import Carousel from './Carousel'

const App = () => {
  const image = [
    img1.jpg,
    img2.jpg,
    img3.jpg,
    img4.jpg,
    img5.jpg
  ];
  
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Image Carousel</h1>
      <Carousel images={image} />
    </div>
  );
}

export default App
