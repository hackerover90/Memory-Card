import { useState } from "react"
import { useEffect } from "react"

export default function Card({ id, name }) {
    console.log('test1')
    const [url, setUrl] = useState('')
    let link = `https://last-airbender-api.fly.dev/api/v1/characters/${id}`
    let img_url = ''
    fetch(link, {mode: 'cors'}) 
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response)
            console.log('test2')
            setUrl(response.photoUrl)
        })
        .catch(error => {
            console.log('Error: ', error)
        })
    
    
    return (
        
        <div className="card" id={name}>
            <img src={url}/>
            <div>{name}</div>
            {console.log('test3')}
        </div>
    )
}