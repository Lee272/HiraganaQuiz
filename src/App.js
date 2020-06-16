import React, { useState } from 'react';
import './App.css';
import ImagePlaceHolder from './Components/ImagePlaceHolder';

export default function App() {
// States
const [textValue, settextValue] = useState('');

// Functions
//Get Data from Textbox & Verify it
const dataResult = (event) => {
  event.preventDefault();
  const dataSearched = event.target.searchText.value
  .toLowerCase()
  .trim();
  settextValue(dataSearched);

    if (dataSearched === '1') {
      return (console.log("True"))
    } else {
      return (console.log('Failed'))
    }
  }

  return (
    <div className="w-100">

      <div className="ba w-50 tc center">
        <ImagePlaceHolder />
      </div>

      <form onSubmit={event => {dataResult(event)}}>
        <div class="fl w-100 w-50-ns pa2">
          <input type="text" name="searchText" />
          <button className="ma2">Next</button>
        </div>

      </form>

      <button>Click</button>

    </div>
  );
}
