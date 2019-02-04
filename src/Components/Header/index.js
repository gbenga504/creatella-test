import React from "react";
import "./index.css";

import Filter from "./Filter";

const Header = props => (
  <div className="row">
    <div className="d-flex main-header justify-content-between align-items-center">
      <div className="d-flex">
        <span className="main-header__title--name">Creatella</span>
        <span className="main-header__title--slug">&nbsp;Faces</span>
      </div>
    </div>
    <Filter />
  </div>
);

export default Header;
