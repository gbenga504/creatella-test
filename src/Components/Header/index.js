import React from "react";
import "./index.css";

import Filter from "./Filter";

export default class Header extends React.PureComponent {
  state = {
    boxShadow: false
  };

  componentDidMount() {
    document.body.onscroll = () => {
      if (window.pageYOffset >= 70) {
        this.setState({
          boxShadow: true
        });
      } else {
        this.setState({
          boxShadow: false
        });
      }
    };
  }

  render() {
    let { boxShadow } = this.state;

    return (
      <div
        className={`row main-header-container ${boxShadow &&
          "main-header--shadow"}`}
      >
        <div
          className={`d-flex main-header justify-content-between align-items-center`}
        >
          <div className="d-flex">
            <span className="main-header__title--name">Creatella</span>
            <span className="main-header__title--slug">&nbsp;Faces</span>
          </div>
        </div>
        <Filter />
      </div>
    );
  }
}
