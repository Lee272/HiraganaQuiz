import React, { useState } from "react";

export default function Timer() {
  // States
  const [counter, setCounter] = useState(20);
  const [end, setend] = useState(false);

  //Effect
  React.useEffect(() => {
    if (counter === 0) {
      setend(true);
    }
  }, [counter]);

  // Functions
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <div className="tc ma3">Countdown: {counter}</div>
      {end && <h1>Stop</h1>}
    </div>
  );
}
