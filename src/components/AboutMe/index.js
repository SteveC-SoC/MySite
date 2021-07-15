import './AboutMe.css';
import pixelSteve from '../../media/Steve-nBG-pic.png'



function AboutMe() {


    return(
        <div className="aboutMe">
            <h2>About me</h2>
            <div className="aboutMeMain">
            <img src={pixelSteve} alt="pixelSteve"/>
            <p>Here will be a paragraph about me, history, this site and projects</p>
            </div>
        </div>
    )
}

export default AboutMe;