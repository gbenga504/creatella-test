import React from "react";
import "./index.css";

import ListItem from "./ListItem";

export default class List extends React.PureComponent {
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
