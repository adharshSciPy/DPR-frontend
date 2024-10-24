import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const OthersNav = ({ active }) => {
  const goto = useNavigate();
  return (
    <div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <ul className="nav nav-tabs">
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "item" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/items");
              }}
            >
              Item
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "packsize" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/packsize");
              }}
            >
              Pack Size
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "shade" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/shade");
              }}
            >
              Shade
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "brand" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/brand");
              }}
            >
              Brand
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "supplier" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/suppliers");
              }}
            >
              Suppliers
            </div>
          </li>
          <li className="nav-item pointer">
            <div
              className={`nav-link ${active === "material" ? "active" : ""}`}
              onClick={() => {
                goto("/admin/materialcategories");
              }}
            >
              Material Categories
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OthersNav;
