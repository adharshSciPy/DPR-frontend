import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProjectNav = () => {
  const goto = useNavigate();
  const projectId = useSelector((state) => state.projectId.id);
  return (
    <div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <div
              className="nav-link active"
              aria-current="page"
              onClick={() => {
                if (projectId !== "")
                  goto(`/admin/project/details/${projectId}`);
              }}
            >
              Details
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                if (projectId !== "")
                  goto(`/admin/project/projectsettings/${projectId}`);
              }}
            >
              Settings
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                if (projectId !== "")
                  goto(`/admin/project/materials/${projectId}`);
              }}
            >
              Inventry
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                if (projectId !== "")
                  goto(`/admin/project/manpower/${projectId}`);
              }}
            >
              Manpower
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateProjectNav;
