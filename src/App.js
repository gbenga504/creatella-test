import React from "react";
import "./App.css";

import Header from "./Components/Header";
import List from "./Components/List";
import { Root } from "./Components/NotificationBanner";

export default class App extends React.PureComponent {
  render() {
    return (
      <Root>
        <div className="container-fluid">
          <Header />
          <div className="d-flex flex-column list-container">
            <List />
          </div>
        </div>
      </Root>
    );
  }
}
