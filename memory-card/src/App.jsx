import { useState } from 'react'
import './App.css'
import Card from './Card'


function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [firstRender, setFirstRender] = useState(true)
  const [AangClicked, setAangClicked] = useState(false)
  const [KataraClicked, setKataraClicked] = useState(false)
  const [TophClicked, setTophClicked] = useState(false)
  const [AzulaClicked, setAzulaClicked] = useState(false)
  const [ZukoClicked, setZukoClicked] = useState(false)
  const [SokkaClicked, setSokkaClicked] = useState(false)
  const [TyClicked, setTyClicked] = useState(false)
  const [IrohClicked, setIrohClicked] = useState(false)
  const [SukiClicked, setSukiClicked] = useState(false)
  const [AppaClicked, setAppaClicked] = useState(false)
  const [OzaiClicked, setOzaiClicked] = useState(false)
  const [WanClicked, setWanClicked] = useState(false)

  function increaseScore() {
    setScore(score + 1)
    if ((score+1) > highScore) {
      setHighScore(highScore+1)
    }
    if (firstRender) {
      setFirstRender(false)
    }
  }

  function resetScore() {
    setScore(0)
    setFirstRender(true)
    setAangClicked(false)
    setKataraClicked(false)
    setTophClicked(false)
    setAzulaClicked(false)
    setZukoClicked(false)
    setSokkaClicked(false)
    setTyClicked(false)
    setIrohClicked(false)
    setSukiClicked(false)
    setAppaClicked(false)
    setOzaiClicked(false)
    setWanClicked(false)
  }
  
  function handleCLick(clicked, name) {
    if (!clicked) {
      if (name == 'Aang') {
        setAangClicked(true)
      } else if(name == 'Katara') {
        setKataraClicked(true)
      } else if(name == 'Toph') {
        setTophClicked(true)
      } else if(name == 'Azula') {
        setAzulaClicked(true)
      } else if(name == 'Zuko') {
        setZukoClicked(true)
      } else if(name == 'Sokka') {
        setSokkaClicked(true)
      } else if(name == 'Ty Lee') {
        setTyClicked(true)
      } else if(name == 'Iroh') {
        setIrohClicked(true)
      } else if(name == 'Suki') {
        setSukiClicked(true)
      } else if(name == 'Appa') {
        setAppaClicked(true)
      } else if(name == 'Ozai') {
        setOzaiClicked(true)
      } else if(name == 'Wan Shi Tong') {
        setWanClicked(true)
      }
    }
  }


  //create arr of card obj with all card attributes and assign
  //each card below a random index in card arr

  let cards = [
    {id: '5cf5679a915ecad153ab68c9', clicked: AangClicked}, 
    {id: '5cf5679a915ecad153ab6992', clicked: KataraClicked},
    {id: '5cf5679a915ecad153ab6a70', clicked: TophClicked},
    {id: '5cf5679a915ecad153ab68da', clicked: AzulaClicked},
    {id: '5cf5679a915ecad153ab6ab8', clicked: ZukoClicked},
    {id: '5cf5679a915ecad153ab6a45', clicked: SokkaClicked},
    {id: '5cf5679a915ecad153ab6a7a', clicked: TyClicked},
    {id: '5cf5679a915ecad153ab6976', clicked: IrohClicked},
    {id: '5cf5679a915ecad153ab6a54', clicked: SukiClicked},
    {id: '5cf5679a915ecad153ab68d4', clicked: AppaClicked},
    {id: '5cf5679a915ecad153ab69fe', clicked: OzaiClicked},
    {id: '5cf5679a915ecad153ab6a8a', clicked: WanClicked}
  ]

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  if (!firstRender) {
    shuffle(cards)
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
        <Card id={cards[0].id} clicked={cards[0].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[1].id} clicked={cards[1].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[2].id} clicked={cards[2].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[3].id} clicked={cards[3].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[4].id} clicked={cards[4].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[5].id} clicked={cards[5].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[6].id} clicked={cards[6].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[7].id} clicked={cards[7].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[8].id} clicked={cards[8].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[9].id} clicked={cards[9].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[10].id} clicked={cards[10].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
        <Card id={cards[11].id} clicked={cards[11].clicked}
        handleCLick={handleCLick} increaseScore={increaseScore} resetScore={resetScore}/>
      </div>

      
    </>
  )
}

export default App
