import React, { useState } from 'react';

export default function Timer(){
// States
const [counter, setCounter] = React.useState(20);

// Functions
React.useEffect( () => { 
	counter > 0 && setTimeout( () => setCounter(counter - 1), 1000);
}, [counter]);

  return(
    <div className="tc ma3">
    	Countdown: {counter}
    </div>
  )
}