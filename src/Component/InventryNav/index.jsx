import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const InventryNav = ({ active }) => {
  const goto = useNavigate();
  return (
    <div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <ul className="nav nav-tabs">
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "inventory" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/inventory");
              }}
            >
              Inventory
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "purchase" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/purchase");
              }}
            >
              Purchase
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "inward" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/inward");
              }}
            >
              Inward
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "outward" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/outward");
              }}
            >
              Outward
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InventryNav;
