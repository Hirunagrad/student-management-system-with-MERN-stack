import React, { useState } from 'react';


function CounterFunction() {
     
    //react hoosks
    let [number,setNumber] = useState(0)
    

     function increment()
    {
      
        setNumber(++number);

      

    }

    return(

       <div>
         <h1>Counter={number}</h1>
         <button onClick={increment}>Increment</button>
      </div>
       
       )
    
    
   



}

export default CounterFunction;