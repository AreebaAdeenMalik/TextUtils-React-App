import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether enabled or not
  const[alert, setAlert] = useState(null);
  const [btn, setbtn] = useState('primary');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }

  const toggleModeRed = ()=>{
    if(mode === 'light'){
      setMode('danger');
      document.body.style.backgroundColor = 'red';
      document.body.style.color='white';
      showAlert("Red mode has been enabled", "success");
      document.title='TextUtils - Red Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
    if(btn==='primary'){
      setbtn('danger');
    }else{
      setbtn('primary')
    }
  }
  
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>
       <Navbar/> */}
        <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} btn={btn} />} />
          </Routes>
        </div>
      </Router>
    </> 
  );
}
export default App;
