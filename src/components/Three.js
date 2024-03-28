import React from 'react'
import { useState } from 'react'
export default function Three() {
const [input , setInput] = useState('')
  return (
    <div>
<input type ="text" onChange ={(e) => setInput(e.target.value)} />
<p>Input is :{input}</p>
    </div>
  )
}
