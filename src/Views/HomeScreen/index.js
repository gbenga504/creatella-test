import React from "react";
import "./index.css";
import { connect } from "react-redux";

import Header from "../../Components/Header";
import List from "../../Components/List";
import { fetchProducts } from "../../Store/actions/products";

class HomeScreen extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProducts({ _page: 0, _limit: 9 });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
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
