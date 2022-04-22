// import logo from './logo.svg';


import './App.css';
import Above from './components/Above';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 2000);

  }
  // const removebodycolor =()=>{
  //   document.body.classList.remove('bg-ligt')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success') //for extra task
  //   document.body.classList.remove('bg-danger')
  // }
  
  const toggleMode = () => {
    // removebodycolor()
    // console.log(cls);
    // document.body.classList.add ('bg-'+cls)

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#281111';
      showAlert('dark mode is eable', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode is eable', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="textnode" changeabout="about" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <div className="container my-3"><Switch>
          <Route path="/above">
            <Above mode={mode} />
          </Route>

          <Route path="/">
            <Textform showAlert={showAlert} heading="Textutils-Word counter" mode={mode} />
          </Route>

        </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;