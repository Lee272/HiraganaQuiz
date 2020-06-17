import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Hiragana from './Components/Data/Data.json';

export default function App() {
// Variables
const dataObject = Hiragana;
// States
const [correctCount, setcorrectCount] = useState(0);
const  [wrongCount, setwrongCount] = useState(0);

// Functions

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
