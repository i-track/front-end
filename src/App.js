import "./App.css";
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import AddForm from "./Components/AddForm/AddForm";
import UpdateForm from "./Components/UpdateForm/UpdateForm";
import * as GrIcons from "react-icons/gr";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({
    dptName: "",
    // lastName: "",
    // email: "",
  });

  // N A V  F U N C T I O N S

  const updateData = (isTrue) => {
    setIsSubmitted(isTrue);
  };

  const resetIsSubmitted = () => {
    setIsSubmitted(false);
  };

  // H A N D L E R S  F O R  P O S T

  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setNewDepartment((prevDepartment) => {
      const editedDepartment = {
        ...prevDepartment,
        [e.target.name]: e.target.value,
      };
      return editedDepartment;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const departmentData = {
      dptName: newDepartment.dptName,
      // lastName: newDepartment.lastName,
      // email: newDepartment.email,
    };
    axios
      .post("http://thawing-depths-18911.herokuapp.com/departments", departmentData)
      .then((response) => {
        console.log(response.data);
        setNewDepartment(response.data);
        console.log(newDepartment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// GET

  const handleGet = () => {
    axios
      .get("http://thawing-depths-18911.herokuapp.com/departments")
      .then((res) => {
        setDepartments(res.data.departments);
        console.log(res.data.departments);
      })
      .catch((err) => console.log(err));
  };

  //  D E L E T E

  const handleDelete = (id) => {
    axios
      .delete(`http://thawing-depths-18911.herokuapp.com/departments/${id}`)
      .then((res) =>
        console.log("Deleted", res).catch((err) => console.log(err))
      );
    return axios.get("http://thawing-depths-18911.herokuapp.com/departments").then((res) => {
      setDepartments(res.data.departments);
    });
  };



  // R E N D E R I N G  D A T A

  const departmentList = departments.map((department) => (
    <div className="departments-container">
      <ul key={department._id} className="departments-content">
        {/* <li className="members-content">
          {department.firstName} {department.lastName}
        </li> */}
        <li className="members-content">{department.dptName}</li>
        {/* <li className="members-content">{department.member[0].email}</li> */}
      </ul>
      <div className="department-buttons-inputs">
        <button
          className="delete-btn"
          onClick={() => handleDelete(department._id)}
        >
          Delete
        </button>
      </div>
      <UpdateForm handleChange={handleChange} handleSubmit={handleSubmit} department={department}/>
    </div>
  ));

  return (
    <>
      <NavBar removeData={resetIsSubmitted} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              handleGet={handleGet}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              departmentList={departmentList}
              newDepartment={newDepartment}
            />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
