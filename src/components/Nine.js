import React from 'react';
import {  Link } from 'react-router-dom';

// import Home from "./Tenth_project_routes/Home";
// import About from './Tenth_project_routes/About';
// import Contact from './Tenth_project_routes/Contact';
// import Services from './Tenth_project_routes/Services';

export default function Nine() {
  return (
   
      <>
        <nav>
          <ul>
            <li><Link to={"/nine/home"}>Home</Link></li>
            <li><Link to={"/nine/about"}>About</Link></li>
            <li><Link to="/nine/contact">Contact</Link></li>
            <li><Link to="/nine/services">Services</Link></li>
          </ul>
        </nav>
      
      
      </>
   
  );
}
