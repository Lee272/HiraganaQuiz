import React, { useState } from "react";
import "./App.css";
import "./style.css";
import Card from "./Components/Card";
import Timer from "./Components/Timer";
import Hiragana from "./Components/Data/Data.json";
// import Katakana from './Components/Data/Katakana.json';

export default function App() {
  // Variables
  const dataObject = Hiragana;
  // States
  const [correctCount, setcorrectCount] = useState(0);
  const [wrongCount, setwrongCount] = useState(0);
  const [wip, setwip] = useState(false);
  const [correct, setcorrect] = useState(false);

  // Functions

  // Randomizer - Object
  const prep = Math.floor(Math.random() * dataObject["length"]);
  const randomResult2 = dataObject[prep]["name"];

  // Get Data from Textbox & Verify it
  const dataResult = (event) => {
    event.preventDefault();
    const dataSearched = event.target.searchText.value.toLowerCase().trim();
    event.target.reset();

    if (dataSearched === randomResult2) {
      return setcorrectCount(correctCount + 1);
    } else {
      return setwrongCount(wrongCount + 1);
    }
  };

  // Verifications
  const correct1 = () => {
    if (correctCount > 1) {
      setcorrect(true);
    }
  };

  return (
    <div className="w-100">
      <h1 className="tc calisto">Hiragana Quiz</h1>
      <div>
        <div className="tc">
          <Card name={randomResult2} hira={dataObject[prep]["image"]} />
        </div>

        <form
          onSubmit={(event) => {
            dataResult(event);
          }}
        >
          <div class="ma2 tc">
            <input type="text" name="searchText" />
            <button className="ma2">Next</button>
          </div>
        </form>

        <div className="ma2 tc">
          <p>
            Correct Answers: <span className="green">{correctCount}</span>
          </p>
          <p>
            Wrong Answers: <span className="red">{wrongCount}</span>
          </p>
        </div>
        <div className="tc calisto">
          <button onClick={() => setwip(true)}>Switch to Katakana</button>
          {wip && <p className="red">Under Construction!</p>}
        </div>
        <div className="tc ma3">
          <button onClick={correct1}>Timer</button>
          {correct && <Timer />}
        </div>
      </div>
    </div>
  );
}
