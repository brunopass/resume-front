import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Source from '../../assets/resume.svg'
import './Landing.css'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import ButtonSecondary from '../../components/Buttons/ButtonSecondary/ButtonSecondary'
import { Link } from 'react-router-dom'
import finish from '../../assets/finishing.svg'
import going from '../../assets/going.svg'
import fireworks from '../../assets/fireworks.svg'
import Card from '../../components/card/Card'
import Mind from '../../assets/mind.png'
import Design from '../../assets/design.png'
import Logo from '../../assets/logo.svg'
import { Helmet } from 'react-helmet'

const Landing = () => {

    const foot1 = ['Iniciar Sesión', 'Crear Cuenta', 'Restablecer Cuenta']
    const foot2 = ['Políticas de Privacidad', 'Políticas de Uso']

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div>
            <Helmet>
                <title>Resume</title>
            </Helmet>
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

            <div className="landing-mid-wrapper">
                <div className="landing-mid-container">
                    <div className="landing-mid-container-text">
                        <h2 className="landing-mid-container-h2">Muestra al mundo tus habilidades</h2>
                        <h4 className="landing-mid-container-h4">Compite con otras personas y aumenta tu visibilidad laboral</h4>
                    </div>
                    <div className="landing-mid-container-card">
                        <Card img={finish} title="Alcanza tus metas" description="Consigue tu trabajo soñado con un perfil constantemente actualizado"/>
                        <div className="landing-mid-container-card-main">
                            <Card img={fireworks} title="Sobresal" description="Haz que tus habilidades y experiencia se diferencien del resto"/>
                        </div>

                        <div className="landing-mid-container-card-main-pwa">
                            <Card img={fireworks} title="Sobresal" description="Haz que tus habilidades y experiencia se diferencien del resto"/>
                        </div>
                        
                        <Card img={going} title="Crece" description="Lleva varios registros de tu perfil laboral"/>
                    </div>
                </div>
            </div>

            <div className="landing-mind-wrapper">
                <div className="landing-mind-container">
                    <div className="landing-mid-container-mind">
                        <img src={Mind} className="landing-mid-container-mind-img"/>
                        <div className="landing-mid-container-mind-text">
                            <h2 className="landing-mid-container-mind-text-h2">Diversifícate!</h2>
                            <h4 className="landing-mid-container-mind-text-h4">Te interesan varios puestos especificos?</h4>
                            <p className="landing-mid-container-mind-text-p">Crea múltiples versiones de tu curriculum, sigue cada rama creada y modifica solo lo necesario.</p>
                            <Link to="/crear-cuenta">
                                <ButtonPrincipal value="Empezar Ahora"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-design-wrapper">
                <div className="landing-mind-container">
                    <div className="landing-mid-container-mind">
                        <div className="landing-mid-container-mind-text">
                            <h2 className="landing-mid-container-mind-text-h2">Personaliza!</h2>
                            <h4 className="landing-mid-container-mind-text-h4">Amante del diseño?</h4>
                            <p className="landing-mid-container-mind-text-p">Elige entre multiples templates, colores, estilos y fuentes, crea tu propia personalidad.</p>
                            <Link to="/crear-cuenta">
                                <ButtonPrincipal value="Empezar Ahora"/>
                            </Link>
                        </div>
                        <img src={Design} className="landing-mid-container-mind-img"/>
                    </div>
                </div>
            </div>

            <footer className="footer-wrapper">
                <div className="footer-container">
                    <img src={Logo} alt="logo" className="footer-container-img"/>
                    <ul className="footer-container-ul">
                        {foot1.map((value,key)=>{
                            return(
                                <Link to={`/${value.toLowerCase().split(' ').join('-').replace(/ó/,'o').replace(/í/,'i')}`} key={key}>
                                    <div className="footer-container-ul-item">
                                        {value}
                                    </div>
                                </Link>
                            )
                        })}
                    </ul>
                    <ul className="footer-container-ul">
                        {foot2.map((value,key)=>{
                            return(
                                <Link to={`/${value.toLowerCase().split(' ').join('-').replace(/ó/,'o').replace(/í/,'i')}`} key={key}>
                                    <div className="footer-container-ul-item">
                                        {value}
                                    </div>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Landing