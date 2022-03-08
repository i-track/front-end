import axios from 'axios'
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

const updateData = (isTrue) => {
  setIsSubmitted(isTrue)
}

const resetIsSubmitted = ()=> {
  setIsSubmitted(false)
}




  return (
    <div className="App">
      <NavBar removeData={resetIsSubmitted} />
        <Routes>
          <Route path="/" />
          <Route path="/About" element={<About/>} />
        </Routes>

    </div>
  );
}

export default App;
