import axios from "axios";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState([]);

  const updateData = (isTrue) => {
    setIsSubmitted(isTrue);
  };

  const resetIsSubmitted = () => {
    setIsSubmitted(false);
  };

  const handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        timeout: 5000,
      })
      .then((res) => {
        setDepartments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handlePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userID: 1000,
        title: "GROUP PROJECT",
      })
      .then((res) => console.log(res.data))
      // .catch((err) => console.log(err));
  };

  // const handleDelete = (event) => {
  //   let id = event.target.id;
  //   let urlBase = "https://jsonplaceholder.typicode.com/posts"
  //   let url = urlBase + "/" + id
  //   fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(d => console.log(d))
  // };


  const handleDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => console.log('Deleted', res).catch(err=> console.log(err)))
  }

  const departmentList = departments.map((department) => (
    <div className="departments-container">
      <li key={department.id}>{department.title}</li>
      <button onClick={(e) => handleDelete(department.id, e)}>Delete</button>
    </div>
  ));

  return (
    <div className="App">
      {/* <NavBar removeData={resetIsSubmitted} />
        <Routes>
          <Route path="/" />
          <Route path="/About" element={<About/>} />
        </Routes> */}

      {departmentList}
      <button onClick={handleGet}>View Departments</button>
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default App;


