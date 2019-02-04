import React from "react";

import ListItem from "./ListItem";

export default class List extends React.PureComponent {
  render() {
    return (
      <div className="d-flex flex-wrap">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}
