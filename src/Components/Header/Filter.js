import React from "react";
import PropTypes from "prop-types";
import "./index.css";

/**
 * This handles the filtering of the products
 */
export default class Filter extends React.PureComponent {
  static propTypes = {
    onSetActiveFilter: PropTypes.func.isRequired
  };

  state = {
    filterBy: "NONE"
  };

  setActiveFilter = value => {
    this.setState(
      {
        filterBy: value
      },
      () => this.props.onSetActiveFilter(value.toLowerCase())
    );
  };

  render() {
    let { filterBy } = this.state;

    return (
      <div className="d-flex filter-header align-items-center">
        <span className="filter-header__title">Filter By:</span>
        <div
          className={`text-center filter-header__filter-item ${filterBy ===
            "ID" && "filter-header__filter-item--active"}`}
          onClick={() => this.setActiveFilter("ID")}
        >
          ID
        </div>
        <div
          className={`text-center filter-header__filter-item ${filterBy ===
            "SIZE" && "filter-header__filter-item--active"}`}
          onClick={() => this.setActiveFilter("SIZE")}
        >
          SIZE
        </div>
        <div
          className={`text-center filter-header__filter-item ${filterBy ===
            "PRICE" && "filter-header__filter-item--active"}`}
          onClick={() => this.setActiveFilter("PRICE")}
        >
          PRICE
        </div>
        <div
          className={`text-center filter-header__filter-item ${filterBy ===
            "NONE" && "filter-header__filter-item--active"}`}
          onClick={() => this.setActiveFilter("NONE")}
        >
          NONE
        </div>
      </div>
    );
  }
}
