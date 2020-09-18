import React, { useState } from 'react'
import ButtonAdd from '../../Buttons/ButtonAdd/ButtonAdd'
import TextInput from '../../TextInput/TextInput'
import './SocialMedia.css'

const SocialMedia = () =>{

    const [url, setUrl] = useState('')
    const [item,setItem] = useState([])

    const add = () => {
        setItem([...item, url])
        setUrl('')
    }

    const remove = key => {
        let arr = item
        arr.splice(key,1)
        setItem(item.filter(item => item))
    }
    
    return(
        <div className="social-media-container">
            <h2 className="social-media-container-h2">Redes sociales</h2>
            <div className="social-media-container-text">
                <TextInput value="Url" handleChange={setUrl.bind(this)} handleValue={url}/>
                <ButtonAdd value="Agregar" handleClick={add}/>
            </div>
            <ul>
                {item.map((value,key)=>{
                    return(
                        <div onClick={remove.bind(this, key)}>
                            {value}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialMedia