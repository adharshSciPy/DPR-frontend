import React from "react";
import "./style.css";

const Button = ({ type, label, size, buttonStyle, onClick }) => {
  const buttonSmall = "btn-sm button-size-sm ";
  const buttonGrey = "btn-dark button-grey"
  const buttonExtraSmall = "btn-sm button-size-esm "
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${
        buttonStyle === "danger"
          ? "btn-danger"
          : buttonStyle === "black"
          ? "btn-dark"
          : buttonStyle === "grey"
          ? buttonGrey
          : "btn-primary butn-or"
      } ${size === "small" ? buttonSmall : size === "extraSmall" ? buttonExtraSmall :""}`}
    >
      {label}
    </button>
  );
};

export default Button;
