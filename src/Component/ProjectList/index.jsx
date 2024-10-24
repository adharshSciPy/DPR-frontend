import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ProjectList = ({ data, onClick }) => {
  const goto = useNavigate();
  return (
    <div
      className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer"
      onClick={onClick}
    >
      <div className="card card-user-body">
        <div>
          <h5 className="card-title">{data.name}</h5>
          <div>{data.location}</div>
          <div className="card-text ">{data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
