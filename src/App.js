import axios from "axios";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState([]);
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDepartment, setNewDepartment] = useState({
    title:"",
    body:""
  })


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
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const departmentData = {
      title: newDepartment.title,
      body: newDepartment.body
    };
    axios.post('https://jsonplaceholder.typicode.com/posts', departmentData).then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  // G E T

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        setDepartments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // P O S T

  // const postData = (e) => {
  //   e.preventDefault()
  //   axios.post('https://jsonplaceholder.typicode.com/posts', {
  //     title,
  //     body
  //   }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
  // }

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
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: newTitle,
      id: id
    }).then(res => alert("update"))
  }

  // R E N D E R I N G  D A T A

  const departmentList = departments.map((department) => (
    <div className="departments-container">
      <ul>
          <li >{department.id}</li>
          <li >{department.title}</li>
          <li >{department.body}</li>
      </ul>
      <div className="department-buttons-inputs">
      <button onClick={() => handleDelete(department.id)}>Delete</button>
      <input onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder="update me"/>
      <button onClick={() => editData(department.id)}>Edit</button>
      </div>
    </div>
  ));

  return (
    <>
      <NavBar removeData={resetIsSubmitted} />
        <Routes>
          <Route path="/" />
          <Route path="/About" element={<About/>} />
        </Routes>
        <section className="department-model">
          {departmentList}
        </section>
      

      <div className="add-member">
      <form onSubmit={handleSubmit}>
        <label>Add Member</label>
        <input type="title" name="title" placeholder="title"value={newDepartment.title}  onChange={handleChange}/>
        <input type="body"  name="body" placeholder="body"value={newDepartment.body} onChange={handleChange}  />
        <button type="submit">Add</button>
      </form>
      </div>

    </>
  );
}

export default App;




// //   const [addFormData, setAddFormData] =useState({
//   title: '',
//   body: ''
// })




// const handleAddFormChange = (event) => {
//   event.preventDefault();

//   const formTitle = event.target.getAttribute('name');
//   const formValue = event.target.value;

//   const newFormData = { ...addFormData}
//   newFormData[formTitle] = formValue;

//   setAddFormData(newFormData)
// }

// const handleAddFormSubmit = (event) => {

//   const newDepartment = {
//     title: addFormData.title,
//     body: addFormData.body
//   }

//   const newDepartments = [...departments, newDepartment]
//   setDepartments(newDepartments)
// }


// name="title" placeholder="title" onChange={handleAddFormChange}

// name="body" placeholder="title" onChange={handleAddFormChange} 