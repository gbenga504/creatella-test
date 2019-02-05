import React from "react";

import DefaultNotificationViewWrapper from "./NotificationBanner/DefaultNotificationViewWrapper";
import Spinner from "./Spinner";

export default class Root extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Spinner />
        <DefaultNotificationViewWrapper />
        {this.props.children}
      </React.Fragment>
    );
  }
}
