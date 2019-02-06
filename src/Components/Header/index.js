import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.css";

import Filter from "./Filter";

/**
 * This is the header of the application with the cart count 
 */
class Header extends React.PureComponent {
  static propTypes = {
    onSelectFilter: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className={`row main-header-container`}>
        <div
          className={`d-flex main-header justify-content-between align-items-center`}
        >
          <div className="d-flex">
            <span className="main-header__title--name">Creatella</span>
            <span className="main-header__title--slug">&nbsp;Faces</span>
          </div>
          <div className="main-header__cart">
            {this.props.cart.length > 0 && (
              <div className="d-flex justify-content-center align-items-center main-header__cart-count">
                {this.props.cart.length}
              </div>
            )}
            <i className="mdi mdi-cart" />
          </div>
        </div>
        <Filter onSetActiveFilter={_sort => this.props.onSelectFilter(_sort)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Header);
