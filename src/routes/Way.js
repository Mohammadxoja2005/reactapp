import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home, Contact, About} from '../frontendPages';
import {Dashboard, MainPageAdmin} from '../adminPages';

export default function Way() {
  return (
    <>
     {/* <Router>
        <Routes>
            <Route exact path="/admin" element={<Dashboard/>}/>
            <Route exact path="/admin/main" element={<MainPageAdmin/>}/>
        </Routes>
    </Router> */}

    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
   </>
    
  )
}
