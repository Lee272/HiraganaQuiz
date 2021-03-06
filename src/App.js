import React, { useState } from "react";

import "./App.css";
import "./style.css";

import Navbar from "./Components/Navbar";
import Scoreboard from "./Components/Scoreboard";
import Card from "./Components/Card";
import Timer from "./Components/Timer";
import Hiragana from "./Components/Data/Data.json";
import Katakana from "./Components/Data/Katakana.json";

export default function App() {
  // Variables
  const dataObjectHira = Hiragana;
  const dataObjectKata = Katakana;
  // States
  const [correctCount, setcorrectCount] = useState(0);
  const [wrongCount, setwrongCount] = useState(0);
  const [hiraganaState, setHiraganaState] = useState(true);
  const [katakanaState, setKatakanaState] = useState(false);
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
    const dataSearched = event.target.searchText.value.toLowerCase().trim();
    event.target.reset();

    if (dataSearched === randomResult2 || dataSearched === randomResult3) {
      return setcorrectCount(correctCount + 1);
    } else {
      return setwrongCount(wrongCount + 1);
    }
  };

  // Verifications
  const correct1 = () => {
    setcorrect(true);
    setcorrectCount(0);
  };

  // Writing Change
  const WritingToggle = (event) => {
    event.preventDefault();
    setHiraganaState(!hiraganaState);
    setKatakanaState(!katakanaState);
  };
  // End of Timer Callback & Score Push to Array
  const callbackParent = () => {
    setcorrect(false);
    setheldScoreArray((heldScoreArray) => [...heldScoreArray, correctCount]);
  };

  return (
    // Background
    <div className="bg-secondary bg-gradient vh-100">
      {/* NAVIGATION BAR */}
      <Navbar />
      <div className="row m-0">
        {/* Column One */}
        {/* SCOREBOARD */}
        <div className="col-md-2 order-2 order-md-1 p-0">
          <Scoreboard scoreValue={heldScoreArray} />
        </div>
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
              {katakanaState && (
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
                tooltip="TEST"
                className="btn btn-info shadow border border-dark"
                onClick={correct1}
              >
                <span>Challenge (30sec)</span>
              </button>
              {correct && <Timer parentCall={callbackParent} />}
            </div>
          </div>
        </div>
        {/* End of Column 2 */}
      </div>
    </div>
  )
}
