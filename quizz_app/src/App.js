import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen'
import {GameStateContext} from './helpers/Context'

function App() {

  const [gameState, setGameState] = useState("menu")
  const [userName, setUsername] = useState("")
  const [score, setScore] = useState(0)

  return (
		<div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{ gameState, setGameState, userName, setUsername, score, setScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
		</div>
	);
}

export default App;
