import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { connect } from "react-redux";

import { ListItem, AdvertListItem } from "./ListItem";

class List extends React.PureComponent {
  static propTypes = {
    onFetchMore: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.body.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.props.onFetchMore();
      }
    };
  }

  render() {
    let {
      products: { data, fetchingMore, hasEndBeenReached }
    } = this.props;
    return (
      <React.Fragment>
        <span className="list-container__title">
          Viewing {data.length} faces
        </span>
        <div className="d-flex flex-wrap">
          {data.map((product, i) =>
            product.isAdvert ? (
              <AdvertListItem
                key={i}
                title={product.title}
                description={product.description}
                sponsorsText={product.sponsorsText}
                generatedImageRef={product.generatedImageRef}
              />
            ) : (
              <ListItem
                key={i}
                id={product.id}
                size={product.size}
                price={product.price}
                face={product.face}
                date={product.date}
              />
            )
          )}
        </div>
        {fetchingMore && (
          <span className="list-container__footer-text list-container__animated-loading">
            Loading...
          </span>
        )}
        {hasEndBeenReached && (
          <span className="list-container__footer-text">
            ~ end of catalogue ~
          </span>
        )}
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
