import "./Main.css";
import React from "react";
import { useState } from "react";
import App from "../../App";
import AddForm from "../AddUser/AddUser";
import * as GrIcons from "react-icons/gr";

const Main = ({
  handleGet,
  handleChange,
  handleSubmit,
  departmentList,
  newDepartment,
}) => {
  return (
    <div>
      <section className="department-search-model">
        <h2>View Members</h2>
        <button className="get-btn" onClick={handleGet}>
          <GrIcons.GrOverview className="get-icon" />
        </button>
      </section>

      {departmentList}
    </div>
  );
};

export default Main;
