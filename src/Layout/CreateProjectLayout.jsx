import React, { useEffect } from "react";
import "./style.css";
import CreateProjectNav from "../Component/CreateProjectNav";
import { useDispatch } from "react-redux";
import { setActivePage } from "../Redux/reducer";
import { Outlet } from "react-router-dom";

const CreateProjectLayout = ({ projectHeading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage("project"));
  }, [dispatch]);
  return (
    <div className="container">
      <div className="col col-12col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 admin-dashboard">
            <div>
              {projectHeading === "" ? "Create New Project" : projectHeading}
            </div>
          </div>
          <br />

          <div className="bg">
            <CreateProjectNav />
          </div>
        </div>
        <br />

        <Outlet />
      </div>
    </div>
  );
};

export default CreateProjectLayout;
