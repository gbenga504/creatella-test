import React from "react";
import "./index.css";

const Header = props => (
  <div className="row">
    <div className="d-flex main-header justify-content-between align-items-center">
      <div className="d-flex">
        <span className="main-header__title--name">Creatella</span>
        <span className="main-header__title--slug">&nbsp;Faces</span>
      </div>
      <i className="mdi mdi-filter" />
    </div>
  </div>
);

export default Header;
