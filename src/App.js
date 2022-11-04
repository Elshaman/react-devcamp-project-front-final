import React from "react";
//import pages
import Users from "./pages/Users";
import Bootcamps from "./pages/Bootcamps";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


function App(){
  return (
    <>
        <Router>
          <div className="container">
              <Routes>
              <Route path='/users' element={ <Users /> } />
              <Route path='/bootcamps' element={ <Bootcamps /> } />
              </Routes>
          </div>
        </Router>
    </>
  )
 
}


export default App