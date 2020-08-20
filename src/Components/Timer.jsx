import React, { useState } from "react";

export default function Timer({ parentCall }) {
  // States
  const [counter, setCounter] = useState(30);
  const [end, setend] = useState(false);

  //Effect
  // Functions
  React.useEffect(() => {
    if (counter === 0) {
      setend(true);
      parentCall();
    } else {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, parentCall]);

  return (
    <div>
      <div className="text-center ma3">Countdown: {counter}</div>
      {end && <h1 className="calisto">Stop!</h1>}
    </div>
  );
}
