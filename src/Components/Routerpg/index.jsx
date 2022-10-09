import React from 'react'
import Landing from '../../Pages/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './../Aboutus/index';
import ContactUs from './../Contactus/index';
// ContactUs
const Routerpg = ({matches} ) => {
  return (
    <>
    <Router>
      <Routes>
        <Route index path='/' element={<Landing matches={matches} />}/>

        <Route path='/aboutus' element={<AboutUs matches={matches} />}/>
        <Route path='/contactus' element={<ContactUs matches={matches} />}/>

   
      </Routes>
    </Router>
 
    </>
  )
}

export default Routerpg
