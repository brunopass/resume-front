<<<<<<< HEAD
import React, { useCallback, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import TextInput from '../../components/TextInput/TextInput'
import Helmet from 'react-helmet'
=======
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import TextInput from '../../components/TextInput/TextInput'
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
import './Login.css'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = useCallback(() => {
        alert(email)
    })

<<<<<<< HEAD
    return(
        <div>
            <Helmet>
                <title>Resume | Iniciar Sesión</title>
            </Helmet>
        
            <div className="login-body">
                <div className="login-container-left">
                    <div className="login-container-left-text">
                        <h3 className="login-container-left-h3">Ya tienes cuenta?</h3>
                        <h1 className="login-container-left-h1">Iniciar Sesión</h1>
                    </div>
                    <div className="login-container-left-text">
                        <TextInput value="Correo electrónico" placeholder="usuario@email.com" isPassword={false} handleChange={setEmail.bind(this)}/>
                        <TextInput value="Contraseña" placeholder="********" isPassword={true} handleChange={setPassword.bind(this)}/>
                    </div>
                    <ButtonPrincipal value="Iniciar Sesión" handleClick={signIn}/>
                        <Link to="/restablecer">
                            <p className="text-input-container-children-p">Olvidaste tu Contraseña?</p>
                        </Link>
                </div>

                <div className ="login-container-right">
                    <div className="wrapper">
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>
=======
    
    return(
        <div className="login-body">
            <div className="login-container-left">
                <div className="login-container-left-text">
                    <h3 className="login-container-left-h3">Ya tienes cuenta?</h3>
                    <h1 className="login-container-left-h1">Iniciar Sesión</h1>
                </div>
                <div className="login-container-left-text">
                    <TextInput value="Correo electrónico" placeholder="usuario@email.com" isPassword={false} handleChange={setEmail.bind(this)}/>
                    <TextInput value="Contraseña" placeholder="********" isPassword={true} handleChange={setPassword.bind(this)}/>
                </div>
                <ButtonPrincipal value="Iniciar Sesión" handleClick={signIn}/>
                    <Link to="/restablecer">
                        <p className="text-input-container-children-p">Olvidaste tu Contraseña?</p>
                    </Link>
            </div>

            <div className ="login-container-right">
                <div className="wrapper">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login