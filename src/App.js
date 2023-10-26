

import React,{ useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
 import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


 


function App() {
    const [mode, setMode]= useState('light');//whether is dark mode is enable or note
    const [alert, setAlert] = useState(null);

    const showAlert =  (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null)
        },1500)
    }
    const toggleMode=()=>{
      if(mode === 'light')
      {
      setMode('dark');
      document.body.style.background='grey';
      showAlert("Dark mode is enable", "success");
    }
     else
     {
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode is enable", "success");
    
    }
  }
  return (
 <>
  <BrowserRouter>
 <Navbar title="Textutils4" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
   
    <Routes>
         <Route  exact path="/about" element={<About mode={mode}/>}/>
          <Route  exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to anyalyze" mode={mode} />}/>
         
        </Routes>
        
   
  </div>
 
  </BrowserRouter>
</>
  );
}

export default App;
