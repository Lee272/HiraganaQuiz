import React, { useState } from 'react';

export default function Card(props) {
// States
// const [disabledText, setdisabledText] = useState("true");
const [disabledText, setdisabledText] = useState("true");

// Functions
// Toggle Romanji Text
	// const toggleText = () => { setdisabledText(!disabledText); }

  return(
    <div>
      <article class="mw5 ma2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center shadow-4">
			  <div class="tc">
    			<img src={props.hira} class="br-100 h3 w3 dib" title="hiragana-ho" alt="img" />

					{!disabledText && <h1 class="f4 ttc">{props.name}</h1>}
					{disabledText && <h1 class="f4 ttc hideText" >{props.name}</h1>}
    			
					<hr class="mw3 bb bw1 b--black-10" />
  			</div>
			</article>
			<div className="ma2 tl tc">
        {/* <button onClick={toggleText} className="shadow-3">Toggle Romanji</button> */}
				<button onClick={ () => setdisabledText(!disabledText) } >Toggle Romanji</button>
      </div>
    </div>
  )
}