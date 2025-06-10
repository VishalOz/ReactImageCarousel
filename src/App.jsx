import React from 'react'
import { useState, useEffect } from "react"
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"

const App = () => {

  const [count, setCount] = useState(0);

  const images = [
    img1, img2, img3, img4, img5
  ];

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[600px] h-[400px] rounded-xl shadow-lg relative">
        <img src={images[count]} alt={`image${count+1}`} className="rounded-xl shadow-lg"/>
      </div>
    </div>
  )
}

export default App
