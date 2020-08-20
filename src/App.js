import React, { useState } from 'react';
import './App.css';
import './style.css';
import Card from './Components/Card';
import Timer from './Components/Timer';
import Hiragana from './Components/Data/Data.json';
import Katakana from "./Components/Data/Katakana.json";


export default function App() {
// Variables
const dataObjectHira = Hiragana;
const dataObjectKata = Katakana;
// States
  const [correctCount, setcorrectCount] = useState(0);
  const [wrongCount, setwrongCount] = useState(0);
  const [hiraganaState, setHiraganaState] = useState(true);
  const [KatakanaState, setKatakanaState] = useState(false);
  const [correct, setcorrect] = useState(false);
  const [heldScoreArray, setheldScoreArray] = useState([]);

// Functions

  // Randomizer - Object Hiragana
  const prepHira = Math.floor(Math.random() * dataObjectHira["length"]);
  const randomResult2 = dataObjectHira[prepHira]["name"];
  // Randomizer - Object Katakana
  const prepKata = Math.floor(Math.random() * dataObjectKata["length"]);
  const randomResult3 = dataObjectKata[prepKata]["name"];

// Get Data from Textbox & Verify it
const dataResult = (event) => {
  event.preventDefault();
  const dataSearched = event.target.searchText.value
  .toLowerCase()
  .trim();
  event.target.reset()

    if (dataSearched === randomResult2) {
      return (setcorrectCount(correctCount + 1))
    } else {
      return (setwrongCount(wrongCount + 1))
    }
  }

// Verifications
const correct1 = () => {
  if (correctCount > 1){
    setcorrect(true)
  }
}

// Writing Change
  const WritingToggle = (event) => {
    event.preventDefault();
    setHiraganaState(!hiraganaState);
    setKatakanaState(!KatakanaState);
  }
  


  return (
    // Background
    <div className="bg-secondary bg-gradient vh-100">
      {/* NAVIGATION BAR */}

      <div className="row m-0">
        {/* Column One */}
        {/* SCOREBOARD */}

        {/* End of Column One */}
        {/* Column Two */}
        <div className="col-md-8 order-1 order-md-2">
          <h1 className="text-center calisto">Japanese Writing Quiz</h1>
          <div>
            <div className="text-center">
              {hiraganaState && (
                <Card
                  name={randomResult2}
                  hira={dataObjectHira[prepHira]["image"]}
                />
              )}
              {KatakanaState && (
                <Card
                  name={randomResult3}
                  hira={dataObjectKata[prepKata]["image"]}
                />
              )}
            </div>

            <form
              onSubmit={(event) => {
                dataResult(event);
              }}
            >
              {" "}
              <div className="container col-md-3">
                <div className="ma2 text-center input-group">
                  <input
                    type="text"
                    name="searchText"
                    className="form-control"
                    aria-describedby="button-addon2"
                  />
                  <button className="btn btn-success" id="button-addon2">
                    Next
                  </button>
                </div>
              </div>
            </form>

            <div className="ma2 text-center">
              <p>
                Correct Answers:{" "}
                <span className="badge rounded-pill bg-secondary border border-light green">
                  {correctCount}
                </span>
              </p>
              <p>
                Wrong Answers:{" "}
                <span className="badge rounded-pill bg-secondary border border-light red">
                  {wrongCount}
                </span>
              </p>
            </div>
            <div className="text-center calisto">
              {hiraganaState && (
                <button
                  className="btn btn-secondary shadow border border-dark"
                  onClick={(event) => WritingToggle(event)}
                >
                  Switch to Katakana
                </button>
              )}
              {KatakanaState && (
                <button
                  className="btn btn-secondary shadow border border-dark"
                  onClick={(event) => WritingToggle(event)}
                >
                  Switch to Hiragana
                </button>
              )}
            </div>
            <div className="text-center ma3">
              <button
                className="btn btn-info shadow border border-dark"
//                 onClick={correct1}
              >
                <span>Challenge (30sec)</span>
              </button>
//               {correct && <Timer />}
            </div>
          </div>
        </div>
        {/* End of Column 2 */}
      </div>
    </div>
  );
}
