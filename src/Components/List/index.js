import React from "react";
import "./index.css";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class List extends React.PureComponent {
  componentDidUpdate() {
    console.log(this.props.products);
  }

  render() {
    return (
      <React.Fragment>
        <span className="list-container__title">Viewing 5 faces</span>
        <div className="d-flex flex-wrap">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(List);
