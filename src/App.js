import React from "react";
import "./App.css";

import Header from "./Components/Header";
import List from "./Components/List";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="d-flex flex-column list-container">
          <span className="list-container__count-text">Viewing 5 faces</span>
          <List />
        </div>
      </div>
    );
  }
}
