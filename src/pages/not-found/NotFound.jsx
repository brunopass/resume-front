import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'
import notFound from '../../assets/notFound.svg'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import './NotFound.css'

const NotFound = () => {
    const history = useHistory()

    const redirect = () => {
        history.push('/')
    }

    return(
        <div>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className="not-found-wrapper">
                <div className="not-found-wrapper-space">
                    <img src={notFound} className="not-found-wrapper-img" onClick={redirect}/>
                    <div>
                        <h2 className="not-found-wrapper-space-h2">Oops! Parece que no hay nada aquí :(</h2>
                        <h4 className="not-found-wrapper-space-h4">Volvamos a la nave</h4>
                        <ButtonPrincipal value="Continuar" handleClick={redirect}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound