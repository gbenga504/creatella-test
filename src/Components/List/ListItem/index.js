import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const ListItem = props => (
  <div className="d-flex flex-column list-item">
    <div className="d-flex justify-content-between align-items-center">
      <span className="list-item__title">{props.id}</span>
      <i className="mdi mdi-plus-circle" />
    </div>
    <span className="list-item__size">Available size ({props.size}px)</span>
    <div
      className="align-self-center list-item__faces"
      style={{ fontSize: props.size }}
    >
      {props.face}
    </div>
    <span className="list-item__price">${(props.price / 100).toFixed(2)}</span>
    <span className="list-item__date">3 days ago</span>
  </div>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default ListItem;
