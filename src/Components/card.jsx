import React from 'react';
import ho from '../Images/ho.png'

export default function Card() {
const dataObject = [
    {
        name: 'ho',
        image: '../Images/ho.png'
    },
    {
        name: 'mo',
        image: '../Images/mo.png'
    },
    {
        name: 'n',
        image: '../Images/n.png'
    },
    {
        name: 'no',
        image: '../Images/no.png'
    },
    {
        name: 'ro',
        image: '../Images/ro.png'
    },
    {
        name: 'to',
        image: '../Images/to.png'
    },
    {
        name: 'yo',
        image: '../Images/yo.png'
    }
]
// Arrays
const Data = ['mo', 'ni', 'san', 'yon', 'go', 'rokku'];

  return(
    <div>
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			  <div class="tc">
    			<img src={ho} class="br-100 h3 w3 dib" title="hiragana-ho" alt="img" />
    			<h1 class="f4 ttc">{Data[0]}</h1>
    			<hr class="mw3 bb bw1 b--black-10" />
  			</div>
			</article>
    </div>
  )
}