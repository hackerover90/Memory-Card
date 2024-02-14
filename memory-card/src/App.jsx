import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <>
      <div id='header'>
        <div id='title'>Avatar Memory Game</div>
        <div id='scoreboard'>
          <div id='score'>Score: {score}</div>
          <div id='highScore'>High Score {highScore}</div>
        </div>
      </div>
      <div id='instructions'>Get points by clicking on an image but don't click on any more than once!</div>
      <div id='card-body'>
        
      </div>
    </>
  )
}

export default App
