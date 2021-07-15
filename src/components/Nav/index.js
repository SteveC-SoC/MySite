import {FaTwitter, FaGithub, FaLinkedin, FaPlus, FaSmile, FaNewspaper, FaPencilRuler} from "react-icons/fa";
import {IconContext} from "react-icons";
import './Nav.css'

function Nav({isActive, handleClick}) {

    
    return(
        <div className={isActive ? 'navWrapper change' : 'navWrapper'}>

        <div className="navBar">
        <a href="/about" className="navLink">
        <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
                <FaSmile title="About Me"/>
            </IconContext.Provider>
        </a>
        <a href="/projects" className="navLink">
        <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
                <FaPencilRuler title="projects"/>
            </IconContext.Provider>
        </a>
        <a href="https://twitter.com/of_gloin" rel="noreferrer" target="_blank" className="navLink">
            <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
                <FaTwitter title="Twitter"/>
            </IconContext.Provider>
        </a>
        <a href="https://github.com/SteveC-SoC" rel="noreferrer" target="_blank" className="navLink">
         <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
            <FaGithub title="GitHub"/>
         </IconContext.Provider>
        </a>
        <a href="https://www.linkedin.com/in/steve-cadden/" rel="noreferrer" target="_blank" className="navLink">
         <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
            <FaLinkedin title="LinkedIn"/>
         </IconContext.Provider>
        </a>
        <a href="/article" className="navLink">
        <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
            <FaNewspaper title="Articles"/>
         </IconContext.Provider>
        </a>
      </div>
      <div className="navButton" onClick={handleClick}>
            <FaPlus title="Click Me"/>
        </div>
    </div>
    )
}

export default Nav;