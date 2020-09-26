import React from 'react'
import {BrowserRouter, Switch,Route, Redirect} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import NotFound from './pages/not-found/NotFound'
import Education from './pages/profile/education/Education'
import Experience from './pages/profile/experience/Experience'
import Media from './pages/profile/media/Media'
import Profile from './pages/profile/Profile'
import Projects from './pages/profile/projects/Projects'
import Skills from './pages/profile/skills/Skills'
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
                <Route exact path="/dashboard/mi-perfil" component={Profile}/>
                <Route exact path="/edit/experiencia" component={Experience}/>
                <Route exact path="/edit/habilidades" component={Skills}/>
                <Route exact path="/edit/educacion" component={Education}/>
                <Route exact path="/edit/redes" component={Media}/>
                <Route exact path="/edit/proyectos" component={Projects}/>
                <Route exact path="/dashboard/cv/:name" component={Curriculum}/>
                <Route exact path="/404" component={NotFound}/>
                <Redirect from="*" to="/404"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router