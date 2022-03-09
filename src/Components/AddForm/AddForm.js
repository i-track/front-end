import React from "react";
import "./AddForm.css"

const AddForm = ({handleChange, handleSubmit}) => {



  return (
    <div>
      <div className="add-member">
        <form className="add-members" onSubmit={handleSubmit}>
          <label>Add Member</label>
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
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
