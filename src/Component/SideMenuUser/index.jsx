import React from "react";
import "./style.css";
import icon from "../../Assets/settings.png";
import burger from "../../Assets/burger.svg";
// import iconactive from "../../Assets/settings-grey.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SideMenuUser = () => {
  const goto = useNavigate();
  const activePage = useSelector((state) => state.projectId.activePage);
  return (
    <div>
      <div className="burger-active">
        <img src={burger} alt="erp" height={40} width={40} />
      </div>

      <div className="side-menu-wrapper burger-notactive ">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="menu-bar-wrap">
                <div
                  className={`${
                    activePage === "project"
                      ? "sidemenu-bar-active"
                      : "sidemenu-bar"
                  }`}
                  onClick={() => {
                    goto("/");
                  }}
                >
                  <div className="sidemenu-bar-text-logo">
                    <img src={icon} alt="erp" height={13} width={13} />
                  </div>
                  <div className="sidemenu-bar-text">Projects</div>
                </div>
                <div
                  className={`${
                    activePage === "inventory"
                      ? "sidemenu-bar-active"
                      : "sidemenu-bar"
                  }`}
                  onClick={() => {
                    goto("/user/inventry");
                  }}
                >
                  <div className="sidemenu-bar-text-logo">
                    <img src={icon} alt="erp" height={13} width={13} />
                  </div>
                  <div className="sidemenu-bar-text">Stock Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuUser;
