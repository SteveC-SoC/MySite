import "./homePage.css";
import Nav from '../Nav';
import pixelSteve from '../../media/Steve-nBG-pic.png'
import { useState } from 'react';




function HomePage() {

  const [isActive, setActive] = useState(false);
  const [bubbleText, setTextChange] = useState("Behold.....");

  
  const handleClick = ()=> {
    setActive(!isActive);
    setTextChange("My Stuff!!");
  }

  return (
    <div className="homePage">
    <Nav handleClick={handleClick} isActive={isActive}/>
    <img className="pixelSteve" src={pixelSteve} alt="Pixel Steve" />
    <div className='speechBubble'>{bubbleText}</div>
    </div>
  );
}

export default HomePage;
