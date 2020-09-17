import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Source from '../../assets/resume.svg'
import './Landing.css'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import ButtonSecondary from '../../components/Buttons/ButtonSecondary/ButtonSecondary'
import { Link } from 'react-router-dom'

const Landing = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div>
            <Navbar/>
            <div className="dashboard-top">
                <div className="dashboard-top-title">
                    <h2 className="dashboard-top-title-h2">Crea, actualiza y comparte tu currículum</h2>
                    <h1 className="dashboard-top-title-h1">Inicia la Transformación Digital</h1>
                    <div className="dashboard-top-title-children">
                        <Link to="crear-cuenta">
                            <ButtonPrincipal value="Empezar Ahora"/>
                        </Link>

                        <Link to="iniciar-sesion">
                            <ButtonSecondary value="Iniciar Sesión" isFull={false}/>
                        </Link>
                    </div>

                    <img src={Source} className="dashboard-top-title-img"/>
                </div>
            </div>

            <div className="dashboard-mid">
                <div>

                </div>
            </div>
        </div>
    )
}

export default Landing