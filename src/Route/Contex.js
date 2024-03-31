import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Tenth_project_routes/Home";
import About from "../components/Tenth_project_routes/About";
import Contact from "../components/Tenth_project_routes/Contact";
import Services from "../components/Tenth_project_routes/Services";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import Ten from "../components/Ten";
// Import components up to Thirty
import Eleven from "../components/Eleven";
import Twelve from "../components/Twelve.js";
import Thirteen from "../components/Thirteen";
import Fourteen from "../components/Fourteen";
import Fifteen from "../components/Fifteen";
import Sixteen from "../components/Sixteen";
import Seventeen from "../components/Seventeen";
import Eighteen from "../components/Eighteen";
import Nineteen from "../components/Nineteen";
import Twenty from "../components/Twenty";
import TwentyOne from "../components/TwentyOne";
import TwentyTwo from "../components/TwentyTwo";
import TwentyThree from "../components/TwentyThree";
import TwentyFour from "../components/TwentyFour";
import TwentyFive from "../components/TwentyFive";
import TwentySix from "../components/TwentySix";
import TwentySeven from "../components/TwentySeven";
import TwentyEight from "../components/TwentyEight";
import TwentyNine from "../components/TwentyNine";
import Thirty from "../components/Thirty";
import Nav from "./Nav.js";
// import App from "../App.js";

export default function Context() {



  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/" element={<One />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" Component={Nine} />
      
          <Route path="/nine/home" element={<Home/>}></Route>
          <Route path="/nine/about" element={<About/>}></Route>
          <Route path="/nine/contact" element={<Contact/>}></Route>  
          <Route path="/nine/services" element={<Services/>}></Route>

        <Route path="/ten" element={<Ten />} />
        <Route path="/eleven" element={<Eleven />} />
        <Route path="/twelve" element={<Twelve />} />
        <Route path="/thirteen" element={<Thirteen />} />
        <Route path="/fourteen" element={<Fourteen />} />
        <Route path="/fifteen" element={<Fifteen />} />
        <Route path="/sixteen" element={<Sixteen />} />
        <Route path="/seventeen" element={<Seventeen />} />
        <Route path="/eighteen" element={<Eighteen />} />
        <Route path="/nineteen" element={<Nineteen />} />
        <Route path="/twenty" element={<Twenty />} />
        <Route path="/twenty-one" element={<TwentyOne />} />
        <Route path="/twenty-two" element={<TwentyTwo />} />
        <Route path="/twenty-three" element={<TwentyThree />} />
        <Route path="/twenty-four" element={<TwentyFour />} />
        <Route path="/twenty-five" element={<TwentyFive />} />
        <Route path="/twenty-six" element={<TwentySix />} />
        <Route path="/twenty-seven" element={<TwentySeven />} />
        <Route path="/twenty-eight" element={<TwentyEight />} />
        <Route path="/twenty-nine" element={<TwentyNine />} />
        <Route path="/thirty" element={<Thirty />} />
      </Routes>
    </BrowserRouter>
  );
}
