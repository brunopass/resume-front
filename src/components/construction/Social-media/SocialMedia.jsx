import React, { useState } from 'react'
import ButtonAdd from '../../Buttons/ButtonAdd/ButtonAdd'
import TextInput from '../../TextInput/TextInput'
import './SocialMedia.css'

const SocialMedia = () =>{

    const [url, setUrl] = useState('')
    const [item,setItem] = useState([])



    const add = () => {
        let favicon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`
        setItem([...item, {favicon, url}])
        setUrl('')
    }

    const remove = key => {
        let arr = item
        arr.splice(key,1)
        setItem(item.filter(item => item))
    }

    const keyPress = e => {
        if(e.key === 'Enter' && url != ''){
            add()
        }
    }

    window.addEventListener('keypress', keyPress)
    
    return(
        <div className="social-media-container">
            <h2 className="social-media-container-h2">Redes sociales y Enlaces</h2>
            <div className="social-media-container-text">
                <TextInput value="Url" handleChange={setUrl.bind(this)} handleValue={url}/>
                <ButtonAdd value="Agregar" handleClick={ url != '' ? add : alert.bind(this,"La url de tu red social no puede estar vacia")}/>
            </div>
            <ul className="social-media-container-ul">
                {item.map((value,key)=>{
                    return(
                        <div>
                            <img src={value.favicon}/>
                            <div className="social-media-child-container">
                                <input type="text" value={value.url} disabled={true} className="social-media-child-container-text"/>
                                <div className="social-media-child-container-rm" onClick={remove.bind(this, key)}>
                                  <div className="modal-container-close-child">
                                    <div className="modal-container-close-child-md"></div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
            <div className="personal-information-container-line"></div>
        </div>
    )
}

export default SocialMedia