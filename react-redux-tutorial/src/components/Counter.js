import React from 'react'
import {useState} from 'react'
function Counter({number,onIncrease,onDecrease}) {
    //const [count,setCount]=useState(0);
  return (
    <div>
        <h1>{number}</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
  )
}

export default Counter