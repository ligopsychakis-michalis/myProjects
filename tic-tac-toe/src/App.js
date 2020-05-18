import React, { useEffect } from 'react';
import './styles/app.scss';
import Score from "./components/Score";
import TurnOf from "./components/TurnOf";
import Winner from "./components/Winner";
import PlayAgain from "./components/PlayAgain";
import {useGame} from './customHooks';


function App() {
  const [blockArray, turnOf, winner, score, handlePlayAgain] = useGame();

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Score score={score} />
      <PlayAgain winner={winner} handlePlayAgain={handlePlayAgain}/>
      <div className="blocks">
        {blockArray}
      </div>
      <footer>
        {winner ? <Winner winner={winner} /> : <TurnOf turnOf={turnOf} />}
      </footer>
    </div>
  );
}

export default App;
