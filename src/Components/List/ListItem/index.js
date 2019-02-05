import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.css";

import { getDate } from "../../../utils";
import {
  addFacesToCart,
  removeFacesFromCart
} from "../../../Store/actions/cart";
import { NotificationBanner } from "../../NotificationBanner";

function showNotificationBanner(type) {
  let title =
      type === "addition" ? "Faces added to cart" : "Faces removed from cart",
    banner = NotificationBanner({ title, type });

  banner.show();
}

const ListItem = props => (
  <div className="d-flex flex-column list-item">
    <div className="d-flex justify-content-between align-items-center">
      <span className="list-item__title">{props.id}</span>
      {props.cart.indexOf(props.id) === -1 ? (
        <i
          className="mdi mdi-plus-circle"
          onClick={() => {
            props.addToCart(props.id);
            showNotificationBanner("addition");
          }}
        />
      ) : (
        <i
          className="mdi mdi-minus-circle"
          onClick={() => {
            props.removeFromCart(props.id);
            showNotificationBanner("removal");
          }}
        />
      )}
    </div>
    <span className="list-item__size">Available size ({props.size}px)</span>
    <div
      className="align-self-center list-item__faces"
      style={{ fontSize: props.size }}
    >
      {props.face}
    </div>
    <span className="list-item__price">${(props.price / 100).toFixed(2)}</span>
    <span className="list-item__date">{getDate(props.date)}</span>
  </div>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    addToCart: id => {
      dispatch(addFacesToCart(id));
    },
    removeFromCart: id => {
      dispatch(removeFacesFromCart(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
