import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import TextInput from '../../components/TextInput/TextInput'

const SignUp = () => {
    const[name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signUp = () => {
        alert(email)
    }

    return(
        <div>
            <Helmet>
                <title>Resume | Crear Cuenta</title>
            </Helmet>
            <div className="login-body">
                <div className="login-container-left">
                    <div className="login-container-left-text">
                        <h3 className="login-container-left-h3">Nuevo por aquí?</h3>
                        <h1 className="login-container-left-h1">Crear cuenta</h1>
                    </div>
                    <div className="login-container-left-text">
                    <TextInput value="Nombre y apellido" placeholder="Bruno Passarelli" isPassword={false} handleChange={setName.bind(this)}/>
                        <TextInput value="Correo electrónico" placeholder="usuario@email.com" isPassword={false} handleChange={setEmail.bind(this)}/>
                        <TextInput value="Contraseña" placeholder="********" isPassword={true} handleChange={setPassword.bind(this)}/>
                    </div>
                    <ButtonPrincipal value="Crear cuenta" handleClick={signUp}/>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp