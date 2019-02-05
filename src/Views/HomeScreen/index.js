import React from "react";
import "./index.css";
import { connect } from "react-redux";

import Header from "../../Components/Header";
import List from "../../Components/List";
import { fetchProducts } from "../../Store/actions/products";

class HomeScreen extends React.PureComponent {
  state = {
    _page: 0,
    _sort: "none"
  };

  componentDidMount() {
    this.props.fetchProducts({ _page: 0, _limit: 9 });
  }

  filterProducts = _sort => {
    this.setState(
      {
        _page: 0,
        _sort
      },
      () => {
        this.props.fetchProducts({ _page: 0, _sort, _limit: 9 });
      }
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <Header onSelectFilter={this.filterProducts} />
        <div className="d-flex flex-column list-container">
          <List />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: params => {
      dispatch(fetchProducts(params));
    }
  };
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(HomeScreen);
