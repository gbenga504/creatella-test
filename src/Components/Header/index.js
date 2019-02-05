import React from "react";
import "./index.css";
import { connect } from "react-redux";

import Filter from "./Filter";
import { fetchProducts } from "../../Store/actions/products";

class Header extends React.PureComponent {
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
        <Filter
          onSetActiveFilter={_sort => {
            this.props.fetchByFilter({ _page: 0, _sort, _limit: 9 });
          }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchByFilter: params => {
      dispatch(fetchProducts(params));
    }
  };
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(Header);
