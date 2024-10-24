import React from "react";
import "./style.css";
import UserNav from "../Component/UserNav";
import { Outlet } from "react-router-dom";
import search from "../Assets/icon-wrapper.svg";

/* <div class="col col-0 col-sm-0 col-md-0 col-lg-3 col-xl-4 col-xxl-4"></div> */

const UserLayout = ({ isUserDashboard }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            {/* <div className="col col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 user-dash">
              <div>Project {!isUserDashboard && "Name"}</div>
            </div> */}
            <div>
              {!isUserDashboard && <UserNav />}
            </div>

            {/* <div className="user-search-padding">
              <div className="row">
                {" "}
                <div className="col col-0 col-sm-0 col-md-0 col-lg-8 col-xl-8 col-xxl-8"></div>
                <div className="col col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4">
                  <div>
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
            </div> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
