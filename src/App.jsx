import React from 'react'
import { useState, useEffect } from "react"
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"

const App = () => {

  const [count, setCount] = useState(0);

  useEffect (() => {
    const interval = setInterval(() => {
      toNext();
    }, 5000);
    return () => clearInterval();
  }, [count]);


  const toNext = () => {
    setCount((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toPrev = () => {
    setCount((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const images = [
    img1, img2, img3, img4, img5
  ];

  return (
    <div className="flex justify-center items-center h-[100vh] w-full max-w-xl mx-auto">
      <div className="w-[600px] h-[400px] rounded-xl shadow-lg relative">

        <img src={images[count]} alt={`image${count+1}`} className="
        rounded-xl shadow-lg w-[600px] h-[400px] shadow-xl transition-opacity duration-5000"/>

        <div className='absolute bottom-4 left-1/2 -tranlate-x-5 flex space-x-2'>
          {images.map((_, idx) => (
            <button
            key={idx}
            onclick={ () => setCount(idx)}
            className={`w-3 h-3 rounded-full ${idx === count ? 'bg-white' : 'bg-gray-400'}` }></button>
          ))}
        </div>

        <button 
        onClick={toPrev}
        className="absolute top-1/2 -translate-x-1/2 p-b-3 w-10 h-10
         text-white font-bold bg-gray-400/80 rounded-full cursor-pointer  hover:bg-gray-300">
          (
        </button>
        <button 
        onClick={toNext}
        className=" absolute top-1/2 left-144 -translate-x-1/2 w-10 h-10
         font-bold bg-gray-400/80 p-b-3 rounded-full text-white hover:bg-gray-300 cursor-pointer">
          )
        </button>
      </div>
    </div>
  )
}

export default App
