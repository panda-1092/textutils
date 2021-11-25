
import './App.css';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
   
  const toogle=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#253b5c';
      document.title='Textutils -Dark Mode';
      setInterval(()=>{
               document.title='Textutil is amazing'
      },2000);
      setInterval(()=>{
               document.title='Enjoy this feature'
      },1500);
    
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.title='Textutils -Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
     <Navbar title="Textutils" About="About" mode={mode} toogle={toogle} />
     <div className="container my-3">
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
         
          </Route>
      </Switch> */}
       <TextForm heading="Enter the text to analyze" mode={mode} />
     </div>
    {/* </Router> */}
    </>
  );
}

export default App;
