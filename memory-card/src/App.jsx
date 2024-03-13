import { useState } from 'react'
import './App.css'
import Card from './Card'


function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function increaseScore() {
    setScore(score + 1)
  }

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
        <Card id={'5cf5679a915ecad153ab68c9'} name={'Aang'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6992'} name={'Katara'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6a70'} name={'Toph'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab68da'} name={'Azula'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6ab8'} name={'Zuko'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6a45'} name={'Sokka'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6a7a'} name={'Ty Lee'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6976'} name={'Iroh'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6a54'} name={'Suki'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab68d4'} name={'Appa'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab69fe'} name={'Ozai'} 
        increaseScore={increaseScore}/>
        <Card id={'5cf5679a915ecad153ab6a8a'} name={'Wan Shi Tong'} 
        increaseScore={increaseScore}/>
      </div>
    </>
  )
}

export default App
