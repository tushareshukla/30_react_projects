import React from 'react'
import { useState } from 'react'
export default function Twelve() {
  const [image, setImage ] = useState(null);
   const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
   }
  return (
    <div>
      <input type ="file" onChange={handleChange}/>
      {image && <img src = {URL.createObjectURL(image)} alt="op" style={{width:"100px",height:"100px"}}/>}
    </div>
  )
}
