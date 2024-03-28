import React from 'react'
import { useState } from 'react'
export default function Six() {
    const [data, setData ] = useState(null)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(json => setData(json))
  return (

    <div>

        {
            data ? <div>Title;{data.title}<br></br>
            Body:{data.body}</div> : <div>Loading...</div>        }
        </div>
  )
}
