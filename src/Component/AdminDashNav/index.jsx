import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

const AdminDashNav = () => {
  const goto = useNavigate();
  return (
    <div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <ul className="nav nav-tabs">
          <li className="nav-item pointer">
            <div
              className="nav-link active"
              aria-current="page"
              onClick={() => {
                goto("/");
              }}
            >
              Projects
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className="nav-link"
              onClick={() => {
                goto("/admin/userlist");
              }}
            >
              Users
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashNav;
