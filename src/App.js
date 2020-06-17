import React, { useState } from 'react';
import './App.css';
// import ImagePlaceHolder from './Components/ImagePlaceHolder';
import Card from './Components/Card';

export default function App() {
// Variables

// Objects
  const dataObject = [
    {
        name: 'ho',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/30_ho.jpg'
    },
    {
        name: 'mo',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/35_mo.jpg'
    },
    {
        name: 'n',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/46_n.jpg'
    },
    {
        name: 'no',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/25_no.jpg'
    },
    {
        name: 'ro',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/43_ro.jpg'
    },
    {
        name: 'to',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/20_to.jpg'
    },
    {
        name: 'yo',
        image: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/38_yo.jpg'
    }
]
// Arrays
const Data = ['mo', 'ni', 'san', 'yon', 'go', 'rokku'];
// States
const [correctCount, setcorrectCount] = useState(0);
const  [wrongCount, setwrongCount] = useState(0);
// Functions

// Randomizer - Array
const randomResult = 
    Data[Math.floor(Math.random()*Data.length)];
// Randomizer - Object
const prep = Math.floor(Math.random()*dataObject["length"])
const randomResult2 = dataObject[prep]["name"]

// Get Data from Textbox & Verify it
const dataResult = (event) => {
  event.preventDefault();
  const dataSearched = event.target.searchText.value
  .toLowerCase()
  .trim();

    if (dataSearched === randomResult2) {
      return (setcorrectCount(correctCount + 1))
    } else {
      return (setwrongCount(wrongCount + 1))
    }
  }

  return (
    <div className="w-100">
      <div>
        <div className="tc">
            <Card name={randomResult2} hira={dataObject[prep]["image"]} />
        </div>

        <form onSubmit={event => {dataResult(event)}}>
          <div class="ma2">
            <input type="text" name="searchText" />
            <button className="ma2">Next</button>
          </div>
        </form>

        <div className="ma2">
          <p>Correct Answers: {correctCount}</p>
          <p>Wrong Answers: {wrongCount}</p>
        </div>
      </div>
    </div>
  );
}
