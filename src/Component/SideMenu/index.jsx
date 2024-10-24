import React, { useState } from "react";
import "./style.css";
import icon from "../../Assets/settings.png";
// import iconactive from "../../Assets/settings-grey.png";
import burger from "../../Assets/burger.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const goto = useNavigate();
  const activePage = useSelector((state) => state.projectId.activePage);
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div>
      <div className="burger-active">
        <img
          src={burger}
          alt="erp"
          height={40}
          width={40}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        />

        {menuActive && (
          <div className="side-menu-wrapper side-menu-position ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="menu-bar-wrap ">
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
                    activePage === "user"
                      ? "sidemenu-bar-active"
                      : "sidemenu-bar"
                  }`}
                  onClick={() => {
                    goto("/admin/userlist");
                  }}
                >
                  <div className="sidemenu-bar-text-logo">
                    <img src={icon} alt="erp" height={13} width={13} />
                  </div>
                  <div className="sidemenu-bar-text">Users</div>
                </div>
                <div
                  className={`${
                    activePage === "inventory"
                      ? "sidemenu-bar-active"
                      : "sidemenu-bar"
                  }`}
                  onClick={() => {
                    goto("/admin/inventory");
                  }}
                >
                  <div className="sidemenu-bar-text-logo">
                    <img src={icon} alt="erp" height={13} width={13} />
                  </div>
                  <div className="sidemenu-bar-text">Inventory</div>
                </div>
                <div
                  className={`${
                    activePage === "other"
                      ? "sidemenu-bar-active"
                      : "sidemenu-bar"
                  }`}
                >
                  <div className="sidemenu-bar-text-logo">
                    <img src={icon} alt="erp" height={13} width={13} />
                  </div>
                  <div
                    className="sidemenu-bar-text"
                    onClick={() => {
                      goto("/admin/items");
                    }}
                  >
                    Others
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="side-menu-wrapper burger-notactive">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="menu-bar-wrap ">
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
                activePage === "user" ? "sidemenu-bar-active" : "sidemenu-bar"
              }`}
              onClick={() => {
                goto("/admin/userlist");
              }}
            >
              <div className="sidemenu-bar-text-logo">
                <img src={icon} alt="erp" height={13} width={13} />
              </div>
              <div className="sidemenu-bar-text">Users</div>
            </div>
            <div
              className={`${
                activePage === "inventory"
                  ? "sidemenu-bar-active"
                  : "sidemenu-bar"
              }`}
              onClick={() => {
                goto("/admin/inventory");
              }}
            >
              <div className="sidemenu-bar-text-logo">
                <img src={icon} alt="erp" height={13} width={13} />
              </div>
              <div className="sidemenu-bar-text">Inventory</div>
            </div>
            <div
              className={`${
                activePage === "other" ? "sidemenu-bar-active" : "sidemenu-bar"
              }`}
            >
              <div className="sidemenu-bar-text-logo">
                <img src={icon} alt="erp" height={13} width={13} />
              </div>
              <div
                className="sidemenu-bar-text"
                onClick={() => {
                  goto("/admin/items");
                }}
              >
                Others
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
