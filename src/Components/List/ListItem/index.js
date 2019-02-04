import React from "react";
import "./index.css";

const ListItem = props => (
  <div className="d-flex flex-column list-item">
    <div className="d-flex justify-content-between align-items-center">
      <span className="list-item__title">#001</span>
      <i className="mdi mdi-plus-circle" />
    </div>
    <span className="list-item__size">Available size (12)</span>
    <div className="align-self-center list-item__faces">( .-. )</div>
    <span className="list-item__price">$3500</span>
    <span className="list-item__date">3 days ago</span>
  </div>
);

export default ListItem;
