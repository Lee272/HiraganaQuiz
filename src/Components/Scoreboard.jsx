import React from "react";

export default function Scoreboard({ scoreValue }) {
  //Data
  let num = 1;
  //Array
  scoreValue.sort((a, b) => b - a);

  // High Score
  const highScore = scoreValue.slice(0, 5).map((newScore) => (
    <tr>
      <th>{num++}</th>
      <th>Guest</th>
      <td>{newScore}</td>
    </tr>
  ));

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr className="table-info">
            <th>#</th>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {/* {validUser && <td>{currentUser}</td>} */}
          {highScore}
        </tbody>
      </table>
    </React.Fragment>
  );
}
