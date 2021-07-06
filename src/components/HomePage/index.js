import { useState} from 'react';
import "./homePage.css";



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
          Twitter
        </a>
        <a href="https://github.com/SteveC-SoC" rel="noreferrer" target="_blank" className="navLink">
            github
        </a>
        <a href="https://www.linkedin.com/in/steve-cadden/" rel="noreferrer" target="_blank" className="navLink">
          LinkedIn
        </a>
        <a href="#" className="navLink">
          blog
        </a>
      </div>
        <div className="navButton" onClick={handleClick}>+</div>
    </div>
  );
}

export default HomePage;
