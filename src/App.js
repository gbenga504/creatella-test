import React from "react";

import Header from "./Components/Header";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}
