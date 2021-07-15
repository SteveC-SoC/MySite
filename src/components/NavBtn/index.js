import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBtn.css';

function NavBtn() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = ()=> {
        setMenuOpen(!menuOpen);
    }
    return(
        <div>

        <div className="dropdown">
        {/* the class name changes on click, to trigger the CSS animation  */}
       <div onMouseEnter={handleClick} onMouseLeave={handleClick}>
       <div className={menuOpen ? 'menuBtn open' : 'menuBtn'} >
           <div className="menuBtnBurgur" ></div>
       </div>
            <div className="dropdownContent">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About Me</Link></p>
                    <p><Link to="/projects">Projects</Link></p>
                    <p><Link to="/article">Articles</Link></p>
                    <p><a href="https://www.linkedin.com/in/steve-cadden/" rel="noreferrer" target="_blank">LinkedIn</a></p>
                    <p><a href="https://github.com/SteveC-SoC" rel="noreferrer" target="_blank">GitHub</a></p>
                    <p><a href="https://twitter.com/of_gloin" rel="noreferrer" target="_blank">Twitter</a></p>
            </div>
        </div>
       </div>
       </div>
    )
}

export default NavBtn;