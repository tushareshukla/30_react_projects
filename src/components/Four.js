import React from 'react'

export default function Four() {
    const list  =['input1', 'input2', 'input3', 'input4', 'input5','input6 ']

  return (
    <div>
       <ul>
        {
            list.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
       </ul>
    </div>
  )
}
