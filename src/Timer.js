import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Timer() {

    const [count, setcount] = useState(10);
    const [isTimeZero, setisTimeZero ] = useState(false);

    useEffect(() => {

       const timer = setTimeout(() => {
          setcount(count-1)
        }, 1000);

        if(count===0){

        setisTimeZero(true);
        clearInterval(timer)
        }

      }, [count]);

  return (
    <div>
     
     <h1>{count}</h1> 

     {isTimeZero?  <h2>Time's up!</h2> : null}

    </div>
  )
}
