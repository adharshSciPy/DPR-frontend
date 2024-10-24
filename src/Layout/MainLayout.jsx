import React from "react";
import "./style.css";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "../Service/authService";
import SideMenu from "../Component/SideMenu";
import search from "../../src/Assets/icon-wrapper.svg";
import { useSelector } from "react-redux";
import SideMenuUser from "../Component/SideMenuUser";

const MainLayout = () => {
  const isUser = authService.getCurrentUser();
  const activePage = useSelector((state) => state.projectId.activePage);
  const goto = useNavigate();
  return (
    <div className="body-height">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 top-layout">
        <div className="top-wrap">
          <div className="admin-logout">
            <div
              className="logout-btn"
              onClick={() => {
                goto(`/${isUser === "Admin" ? "admin" : "user"}`);
              }}
            >
              Dashboard
            </div>
          </div>

          <div className="admin-logout">
            <div
              className="logout-btn"
              onClick={() => {
                authService.logout();
                goto("/login");
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu-wrap">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-9 admin-dash menutop">
            <div>
              {activePage === "project"
                ? "Dashboard"
                : activePage === "user"
                ? "User List"
                : activePage === "inventory"
                ? "Inventory"
                : ""}
            </div>
          </div>

          <div className="col col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 menutop">
            <div>
              <input
                type="search"
                className="w-100"
                placeholder="Search name"
              />
            </div>
            <div className="admin-dashboard-btn-wrap">
              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-padding btn-padding-search butn-or"
                >
                  <img src={search} alt="avr img" />
                  <div className="padding"> Search</div>
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-secondary">
                  Reset
                </button>
                <button type="button" className="btn ">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sidemenu-flex">
        {isUser === "Admin" ? <SideMenu /> : <SideMenuUser />} */}
      {/* <SideMenu /> */}
      {/* <SideMenuUser /> */}
      {/* <div className="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 ">
          <Outlet />
        </div>
      </div> */}
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 ">
          {isUser === "Admin" ? <SideMenu /> : <SideMenuUser />}
        </div>
        {/* <SideMenu /> */}
        {/* <SideMenuUser /> */}
        <div className="col col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
