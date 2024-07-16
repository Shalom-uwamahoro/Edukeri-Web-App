
import React from 'react';
import Navbar from './Navbar';
import TeachersOverview from './TeachersOverview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">

<Router>
        <Routes>
        <Route exact path="/" element={
          <>  
          <Navbar/>        

         </>
        } />
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/TeachersOverview" element={<TeachersOverview/>}/>
        {/* <Route path="/Profile" element={<Profile/>}/> */}
        

        </Routes>
      </Router>
      

    </div>
  );
}
export default App;


