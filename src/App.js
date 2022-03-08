import axios from "axios";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const updateData = (isTrue) => {
    setIsSubmitted(isTrue);
  };

  const resetIsSubmitted = () => {
    setIsSubmitted(false);
  };

  // G E T

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setDepartments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // P O S T

  const postData = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
  }

  //  D E L E T E

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) =>
        console.log("Deleted", res).catch((err) => console.log(err))
      );
  };

  // R E N D E R I N G  D A T A

  const departmentList = departments.map((department) => (
    <div className="departments-container">
      <table>
        <tr>
          <td style={{border: '1px solid black'}}>{department.id}</td>
          <td style={{border: '1px solid black'}}>{department.title}</td>
          <td style={{border: '1px solid black'}}>{department.body}</td>
        </tr>
      </table>
      <button onClick={() => handleDelete(department.id)}>Delete</button>
    </div>
  ));

  return (
    <div className="App">
      {/* <NavBar removeData={resetIsSubmitted} />
        <Routes>
          <Route path="/" />
          <Route path="/About" element={<About/>} />
        </Routes> */}

      <form>
        <label>Sign Up</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        <hr/>
        <button onClick={postData}>Post</button>
      </form>



      {departmentList}
    </div>
  );
}

export default App;

// const handlePost = () => {
//   axios
//     .post("https://jsonplaceholder.typicode.com/posts", {
//       userID: 1000,
//       title: "GROUP PROJECT",
//     })
//     .then((res) => console.log(res.data));
//   // .catch((err) => console.log(err));
// };
