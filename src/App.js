import axios from 'axios'
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from './Components/NavBar/NavBar';

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

    </div>
  );
}

export default App;
