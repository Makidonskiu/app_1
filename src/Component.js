import React, { useState, useEffect } from "react";

function Component1(){

    let [count, setCount] = useState(0)
    let [num, setNum] = useState(1)
    let [str, setSting] = useState('o')
    

    function increment(){
        setCount(++count)
    }

    function decrement(){
        setCount(--count)
    }

    useEffect(()=>{
        console.log('следит за num')
        
    }, [])

    return(
        <div>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={increment}>increment</button>
            <button className="btn btn-danger" onClick={decrement}>decrement</button>
            <h2>{str}</h2>
            <input type="text" value={str} onChange={event => setSting(event.target.value) }/>

            <h1>{num}</h1>
            <button className="btn btn-success" onClick={()=> setNum(num => num + 1)}>+</button> 

        </div>
    )
}

export default Component1