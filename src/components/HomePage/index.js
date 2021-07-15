import "./homePage.css";
import Nav from '../Nav';
import pixelSteve from '../../media/Steve-nBG-pic.png'
import { useState } from 'react';




function HomePage() {

  const [isActive, setActive] = useState(false);
  const [textChange, setTextChange] = useState(true);

  let bubble = "test1"
  //let bubble ={textChange ? 'behold' : 'my stuff'};
  
  const handleClick = ()=> {
    setActive(!isActive);
    setTextChange(!textChange);
  }

  return (
    <div className="homePage">
    <Nav handleClick={handleClick} isActive={isActive}/>
    <img className="pixelSteve" src={pixelSteve} alt="Pixel Steve" />
    <div className={textChange ? 'speechBubble' : 'speechBubble change'}>{bubble}</div>
    </div>
  );
}

export default HomePage;
