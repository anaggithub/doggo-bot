import React from "react";
import "./index.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className="layout--container">
      <div className="layout--content">{children}</div>
    </div>
  );
};

export default DefaultLayout;
