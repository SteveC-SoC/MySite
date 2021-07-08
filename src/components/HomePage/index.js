import { useState} from 'react';
import "./homePage.css";
import {FaTwitter, FaGithub, FaLinkedin, FaPlus, FaSmile, FaNewspaper, FaPencilRuler} from "react-icons/fa";
import {IconContext} from "react-icons";
import Nav from '../Nav';



function HomePage() {
  return (
      //className changes depending on if isActive is true or false
    <div className="homePage">
    <Nav/>
    </div>
  );
}

export default HomePage;
