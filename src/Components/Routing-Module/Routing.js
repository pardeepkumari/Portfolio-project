import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Loginform from '../../Authentication/Login';
import Register from '../../Authentication/Register';

import About from '../ABOUT/About';
import Contact from '../CONTACT/Contact';
import Footer from '../FOOTER/Footer';
import Home from '../HOME/Home';
import NewNavbar from '../LAYOUT/Navbar';
import Services from '../SERVICES/Services';
import Protected from './Protected';




 const MyRouting = () => {
  return (
    <Router>
        <NewNavbar/>
        
        <Routes>
        
        <Route path="/" element={<Home />}/>

        <Route element={<Protected />}>
          <Route path="/about_page" element={<About />}/>
          <Route path="/Contact_page" element={<Contact />}/>
        </Route>
        
        <Route path="/Services" element={<Services />}/>
        <Route path="/login" element={<Loginform />}/>
        <Route path="/Register" element={<Register/>}/>
       
        
        </Routes>
        <Footer/>
    </Router>

    
  )
}
export default MyRouting;
