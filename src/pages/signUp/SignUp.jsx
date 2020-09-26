import React, { useState } from 'react'
<<<<<<< HEAD
import { Helmet } from 'react-helmet'
=======
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
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
<<<<<<< HEAD
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
=======
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

>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp