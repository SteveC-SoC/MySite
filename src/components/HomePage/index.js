import { useState} from 'react';
import "./homePage.css";
import {FaTwitter, FaGithub, FaLinkedin, FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";



function HomePage() {

    const [isActive, setActive] = useState(false);

    const handleClick = ()=> {
        setActive(!isActive);
    }

  return (
    <div className={isActive ? 'navWrapper change' : 'navWrapper'}>
      <div className="navBar">
        <a href="#" className="navLink">
          <i>Me</i>
        </a>
        <a href="#" className="navLink">
          projects
        </a>
        <a href="https://twitter.com/of_gloin" rel="noreferrer" target="_blank" className="navLink">
            <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
                <FaTwitter />
            </IconContext.Provider>
         
        </a>
        <a href="https://github.com/SteveC-SoC" rel="noreferrer" target="_blank" className="navLink">
         <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
            <FaGithub />
         </IconContext.Provider>
        </a>
        <a href="https://www.linkedin.com/in/steve-cadden/" rel="noreferrer" target="_blank" className="navLink">
         <IconContext.Provider value={{style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
            <FaLinkedin/>
         </IconContext.Provider>
        </a>
        <a href="#" className="navLink">
          blog
        </a>
      </div>
        <div className="navButton" onClick={handleClick}>
            <FaPlus/>
        </div>
    </div>
  );
}

export default HomePage;
