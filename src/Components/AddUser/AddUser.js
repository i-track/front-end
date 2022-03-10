import React from "react";
import "./AddUser.css"

const AddUser = ({handleChange, handleSubmit, newDepartment}) => {



  return (
    <div>
      <div className="add-member">
        <form className="add-members" onSubmit={handleSubmit}>
          <label className="add-member-label">Add Member</label>
          <input
            type="text"
            name="dptName"
            placeholder="Department"
            className="add-input"
            value={newDepartment.dptName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="member"
            placeholder="First Name"
            className="add-input"
            value={newDepartment.member.firstName}
            onChange={handleChange}
          />
          <input
            type="lastName"
            name="lastName"
            placeholder="Last Name"
            className="add-input"
            // value={newDepartment.member.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="add-input"
            // value={newDepartment.member.email}
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

export default AddUser;
