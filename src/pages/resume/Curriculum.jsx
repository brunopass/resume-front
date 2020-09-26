import React from 'react'
import Education from '../../components/construction/Education/Education'
<<<<<<< HEAD
import PersonalInformation from '../../components/construction/Personal-information/PersonalInformation'
import Projects from '../../components/construction/Projects/Projects'
import SocialMedia from '../../components/construction/Social-media/SocialMedia'
=======
import PersonalInformation from '../../components/construction/Personal-information/PerrsonalInformation'
import Projects from '../../components/construction/Projects/Projects'
import SocialMedia from '../../components/construction/Social-media/SocialMedia'
import WorkExperience from '../../components/construction/Work-experience/WorkExperience'
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
import './Curriculum.css'

const Curriculum = () => {

    

    return(
        <div className="curriculum-container">
            <div className="curriculum-wrapper">
                <nav className="curriculum-wrapper-nav">
                    <div className="curriculum-wrapper-nav-child">
                        <img src="" alt="logo"/>
                    </div>
                </nav>

                <div className="curriculum-wrapper-top">
                    <div className="curriculum-wrapper-top-left">
                        <div className="curriculum-wrapper-top-left-index"></div>
                        <ul>
                            
                        </ul>
                    </div>

                    <div className="curriculum-wrapper-top-right">

                        <div className="curriculum-wrapper-top-right-stats">
                            <ul>

                            </ul>
                        </div>

<<<<<<< HEAD
=======
                        <PersonalInformation/>
                        <SocialMedia/>
                        <Education/>
                        <WorkExperience/>
                        <Projects/>
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum