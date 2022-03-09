import "./App.css";
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import AddForm from "./Components/AddForm/AddForm";
import * as GrIcons from "react-icons/gr";


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDepartment, setNewDepartment] = useState({
    title: "",
    body: "",
  });
  const [fetchAgain, setFetchAgain] = useState(0);

  // N A V  F U N C T I O N S

  const updateData = (isTrue) => {
    setIsSubmitted(isTrue);
  };

  const resetIsSubmitted = () => {
    setIsSubmitted(false);
  };

  // H A N D L E R S  F O R  P O S T

  const handleChange = (e) => {
    const value = e.target.value;
    setNewDepartment({
      ...newDepartment,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchAgain(fetchAgain + 1);
    const departmentData = {
      title: newDepartment.title,
      body: newDepartment.body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", departmentData)
      .then((response) => {
        console.log(response.data);
        setNewDepartment(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // G E T

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setDepartments(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [fetchAgain]);

  const handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setDepartments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  //  D E L E T E

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) =>
        console.log("Deleted", res).catch((err) => console.log(err))
      );
  };

  // U P D A T E

  const editData = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: newTitle,
        id: id,
      })
      .then((res) => alert("update"));
  };

  // R E N D E R I N G  D A T A

  const departmentList = departments.map((department) => (
    <div className="departments-container">
      <ul className="departments-content">
        <li>{department.id}</li>
        <li>{department.id}</li>
        <li>{department.id}</li>
        <li>{department.id}</li>
      </ul>
      <div className="department-buttons-inputs">
        <button className="delete-btn" onClick={() => handleDelete(department.id)}>Delete</button>
        <input
            type="Department"
            name="Department"
            placeholder="Department"
            className="add-input"
            // value={newDepartment.title}
            onChange={handleChange}
          />
          <input
            type="firstName"
            name="firstName"
            placeholder="First Name"
            className="add-input"
            // value={newDepartment.body}
            onChange={handleChange}
          />
          <input
            type="lastName"
            name="lastName"
            placeholder="Last Name"
            className="add-input"
            // value={newDepartment.body}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="add-input"
            // value={newDepartment.body}
            onChange={handleChange}
          />
        <button className="editData-btn" onClick={() => editData(department.id)}>Edit</button>
      </div>
    </div>
  ));

  return (
    <>
      <NavBar removeData={resetIsSubmitted} />
      <Routes>
        <Route path="/" element={<Main handleGet={handleGet} handleChange={handleChange} handleSubmit={handleSubmit} departmentList={departmentList} />}/>
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
