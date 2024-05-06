import { useState } from "react"
import { useEffect } from "react"

export default function Card({ id, increaseScore, resetScore, clicked, handleCLick }) {
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    let link = `https://last-airbender-api.fly.dev/api/v1/characters/${id}`
    
    useEffect(() => {
        fetch(link, {mode: 'cors'}) 
        .then(response => {
            return response.json();
        })
        .then(response => {
            setUrl(response.photoUrl)
            setName(response.name)
        })
        .catch(error => {
            console.log('Error: ', error)
        })
    }, [link])  
    
    return (
        
        <div className="card" id={name} onClick={() => {
            handleCLick(clicked, name);
            if (!clicked) {
                increaseScore()
            } else {
                resetScore()
            }
            }}>
            <img src={url}/>
            <div className="card-name">{name}</div>
        </div>
    )
}