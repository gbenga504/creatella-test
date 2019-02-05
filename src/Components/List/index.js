import React from "react";
import "./index.css";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class List extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <span className="list-container__title">Viewing 5 faces</span>
        <div className="d-flex flex-wrap">
          {this.props.products.data.map((product, i) => (
            <ListItem
              key={i}
              id={product.id}
              size={product.size}
              price={product.price}
              face={product.face}
              date={product.date}
            />
          ))}
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
