import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrincipal from '../Buttons/ButtonPrincipal/ButtonPrincipal'
import './Navbar.css'

const Navbar = () => {

    const linkers = ['Características','Quienes Somos', 'Iniciar sesión']

    return(
        <nav className="navbar-wrap"> 
            <div className="navbar-container">
                <img src="" alt="logo" className="img-logo"/>
                <div className="navbar-children">
                    <ul className="navbar-children-ul">
                        {linkers.map((value,key)=>{
                        return(
                            <Link to={`/${value.toLowerCase().split(' ').join('-').replace(/ó/,'o').replace(/í/,'i')}`}>
                                <li key={key} className="navbar-children-ul-li">{value}</li>
                            </Link>
                            )}
                        )}
                    </ul>
                    <Link to="/crear-cuenta">
                        <ButtonPrincipal value="Crear Cuenta"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar