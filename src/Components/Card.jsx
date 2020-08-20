import React, { useState } from "react";

export default function Card(props) {
  // States
  // const [disabledText, setdisabledText] = useState("true");
  const [disabledText, setdisabledText] = useState("true");

  // Functions
  // Toggle Romanji Text
  // const toggleText = () => { setdisabledText(!disabledText); }

  return (
    <div>
      <article className="mw5 ma2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center shadow-4">
        <div className="tc">
          <img
            src={props.hira}
            className="br-100 h3 w3 dib"
            title="hiragana-ho"
            alt="img"
          />

          {!disabledText && (
            <h1 className="form-control f4 ttc">{props.name}</h1>
          )}
          {disabledText && (
            <h1 className="form-control f4 ttc hideText">{props.name}</h1>
          )}

          {/* <hr class="mw3 bb bw1 b--black-10" /> */}
        </div>
      </article>
      <div className="ma2 tl tc">
        {/* <button onClick={toggleText} className="shadow-3">Toggle Romanji</button> */}
        <button
          onClick={() => setdisabledText(!disabledText)}
          className="btn btn-secondary shadow border border-dark"
        >
          Toggle Romanji
        </button>
      </div>
    </div>
  );
}
