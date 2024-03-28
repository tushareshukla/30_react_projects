import React, { useState } from 'react'

export default function Five() {
    const [checked , unchecked] = useState(false)
    const handleToggle = () =>{
        unchecked(!checked)
    }
  return (
    <div>
        <label>
            <input type='checkbox' onClick={handleToggle}></input>

        </label>
        <span>{checked ? "On" : "Off"}</span>
    </div>
  )
}
