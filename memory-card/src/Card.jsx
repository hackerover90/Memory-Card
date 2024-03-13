import { useState } from "react"
import { useEffect } from "react"

export default function Card({ id, name, increaseScore }) {
    const [url, setUrl] = useState('')
    const [clicked, setClicked] = useState(false)
    let link = `https://last-airbender-api.fly.dev/api/v1/characters/${id}`
    
    useEffect(() => {
        fetch(link, {mode: 'cors'}) 
        .then(response => {
            return response.json();
        })
        .then(response => {
            setUrl(response.photoUrl)
        })
        .catch(error => {
            console.log('Error: ', error)
        })
    }, [link])
    
    /*
    useEffect(() => {
        if (clicked) {
            alert('It is clicked')
        }
    }, [clicked])
    */
    
    function handleCLick() {
        if (!clicked) {
            setClicked(true)
        }
        
    }    

    
    return (
        
        <div className="card" id={name} onClick={() => {
            handleCLick();
            if (!clicked) {
                increaseScore()
            }}}>
            <img src={url}/>
            <div className="card-name">{name}</div>
        </div>
    )
}