import React from 'react'
import Education from '../../components/construction/Education/Education'
import PersonalInformation from '../../components/construction/Personal-information/PerrsonalInformation'
import Projects from '../../components/construction/Projects/Projects'
import SocialMedia from '../../components/construction/Social-media/SocialMedia'
import WorkExperience from '../../components/construction/Work-experience/WorkExperience'
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

                        <PersonalInformation/>
                        <SocialMedia/>
                        <Education/>
                        <WorkExperience/>
                        <Projects/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum