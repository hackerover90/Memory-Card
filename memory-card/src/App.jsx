import { useState } from 'react'
import './App.css'
import Card from './Card'


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
        <Card id={'5cf5679a915ecad153ab68c9'} name={'Aang'}/>
        <Card id={'5cf5679a915ecad153ab6992'} name={'Katara'}/>
        <Card id={'5cf5679a915ecad153ab6a70'} name={'Toph'}/>
        <Card id={'5cf5679a915ecad153ab68da'} name={'Azula'}/>
        <Card id={'5cf5679a915ecad153ab6ab8'} name={'Zuko'}/>
        <Card id={'5cf5679a915ecad153ab6a45'} name={'Sokka'}/>
        <Card id={'5cf5679a915ecad153ab6a7a'} name={'Ty Lee'}/>
        <Card id={'5cf5679a915ecad153ab6976'} name={'Iroh'}/>
        <Card id={'5cf5679a915ecad153ab6a54'} name={'Suki'}/>
        <Card id={'5cf5679a915ecad153ab68d4'} name={'Appa'}/>
        <Card id={'5cf5679a915ecad153ab69fe'} name={'Ozai'}/>
        <Card id={'5cf5679a915ecad153ab6a8a'} name={'Wan Shi Tong'}/>
      </div>
    </>
  )
}

export default App
