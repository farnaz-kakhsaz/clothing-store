import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...rest }) => (
  <button className="custom-button" {...rest}>
    {children}
  </button>
);

export default CustomButton;
