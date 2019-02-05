import React from "react";
import "./index.css";
import { connect } from "react-redux";

import Header from "../../Components/Header";
import List from "../../Components/List";
import { fetchProducts } from "../../Store/actions/products";

class HomeScreen extends React.PureComponent {
  state = {
    _page: 1,
    _sort: "none"
  };

  componentDidMount() {
    let { _sort } = this.state;
    this.props.fetchProducts({ _page: 1, _sort, _limit: 9 });
  }

  componentDidUpdate(prevProps) {
    let {
        products: { data: newData }
      } = this.props,
      {
        products: { data: prevData }
      } = prevProps;

    if (newData.length > prevData.length && newData !== prevData.length) {
      this.setState({
        _page: this.state._page + 1
      });
    }
  }

  filterProducts = _sort => {
    this.setState(
      {
        _page: 2,
        _sort
      },
      () => {
        this.props.fetchProducts({ _page: 1, _sort, _limit: 9 });
      }
    );
  };

  fetchMoreProducts = () => {
    let {
      products: { hasEndBeenReached, fetchingMore }
    } = this.props;

    if (!hasEndBeenReached && !fetchingMore) {
      let { _page, _sort } = this.state;
      this.props.fetchProducts({ _page, _sort, _limit: 9 }, true);
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Header onSelectFilter={this.filterProducts} />
        <div className="d-flex flex-column list-container">
          <List onFetchMore={this.fetchMoreProducts} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: (params, isFetchRequest) => {
      return dispatch(fetchProducts(params, isFetchRequest));
    }
  };
}

export default connect(
  state => ({ products: state.products }),
  mapDispatchToProps
)(HomeScreen);
