import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Tenth_project_routes/Home'
import About from './Tenth_project_routes/About'
import Services from './Tenth_project_routes/Services'
import Contact from './Tenth_project_routes/Contact'

export default function Nine() {
  return (
   
    <BrowserRouter>
    <nav>
        <ul>
    <Link to={"/"}>    <li>Home</li></Link>
    <Link to={"/about"}>    <li>About</li></Link>

    <Link to={"/contact"}>    <li>Contact</li></Link>
    <Link to={"/servies"}>    <li>Servies</li></Link>            </ul>
        </nav>
    <Routes>
        <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/about' element={<About/>}>
            </Route>
            <Route path='/servies' element={<Services/>}>
            </Route>
            <Route path='/contact' element={<Contact/>}>
            </Route>

            </Routes></BrowserRouter>
  )
}
