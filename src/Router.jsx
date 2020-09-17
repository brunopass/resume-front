import React from 'react'
import {BrowserRouter, Switch,Route, Redirect} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import NotFound from './pages/not-found/NotFound'
import Curriculum from './pages/resume/Curriculum'
import SignUp from './pages/signUp/SignUp'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/crear-cuenta" component={SignUp}/>
                <Route exact path="/iniciar-sesion" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/dashboard/cv/:name" component={Curriculum}/>
                <Route exact path="/404" component={NotFound}/>
                <Redirect from="*" to="/404"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router