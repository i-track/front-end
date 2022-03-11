import { useState, React } from "react";
import "./UpdateForm.css";
import axios from "axios";

const UpdateForm = ({ department }) => {
  const [newTitle, setNewTitle] = useState({
    dptName: "",
    // lastName: "",
    // email: "",
  });

  const [redirect, setRedirect] = useState(false);

  // UPDATE HANDLE CHANGE
  const handleFormChange = (e) => {
    e.preventDefault();
    e.persist();
    setNewTitle((prevTitle) => {
      const editedTitle = {
        ...prevTitle,
        [e.target.name]: e.target.value,
      };
      return editedTitle;
    });
  };

  // UPDATE HANDLE SUBMIT
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const departmentData = {
    //   firstName: newDepartment.firstName,
    //   lastName: newDepartment.lastName,
    //   email: newDepartment.email,
    // };
    axios
      .get("https://thawing-depths-18911.herokuapp.com/departments")
      .then((response) => {
        console.log(response.data);
        // setNewTitle(response.data);
        // console.log(newDepartment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // U P D A T E

  const editData = (id) => {
    axios
      .put(`https://thawing-depths-18911.herokuapp.com/departments/${id}`, {
        dptName: newTitle.dptName,
        // lastName: newTitle.lastName,
        // email: newTitle.email,
      })
      .then((res) => setNewTitle(res))
      .then((res) => alert("Updated! Refresh to view changes"));
    //   .then(setRedirect(true))
    //   return axios.get("http://localhost:4000/departments").then((res) => {
    //   setNewTitle(res.data);
    // });
  };

  // return
  return (
    <div className="update-form-container">
      <form className="update-form-container" onSubmit={handleFormSubmit}>
        <input
          type="dptName"
          name="dptName"
          placeholder="Department Name"
          className="add-input"
          value={newTitle.dptName}
          onChange={handleFormChange}
        />
        {/* <input
          type="lastName"
          name="lastName"
          placeholder="Last Name"
          className="add-input"
          value={newTitle.lastName}
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="add-input"
          value={newTitle.email}
          onChange={handleFormChange}
        /> */}
        <button
          className="editData-btn"
          onClick={() => editData(department._id)}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;

{
  /* <input
          type="Department"
          name="Department"
          placeholder="Department"
          className="add-input"
          // value={newDepartment.title}
          onChange={handleChange}
        /> */
}
