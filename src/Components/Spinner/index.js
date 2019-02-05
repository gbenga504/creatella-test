import React from "react";
import { connect } from "react-redux";
import "./index.css";

class Spinner extends React.PureComponent {
  state = {
    visible: false
  };

  componentDidUpdate(prevProps) {
    let {
      products: { loading }
    } = this.props;
    if (loading) {
      this.timer = setTimeout(() => this.setState({ visible: true }), 1000);
    } else if (prevProps.products.loading && loading === false) {
      clearTimeout(this.timer);
      this.setState({ visible: false });
    }
  }

  render() {
    return this.state.visible ? (
      <div className="spinner-container d-flex align-items-center justify-content-center">
        <div className="circular-spinner" />
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Spinner);
