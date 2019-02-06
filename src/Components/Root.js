import React from "react";

import DefaultNotificationViewWrapper from "./NotificationBanner/DefaultNotificationViewWrapper";
import Spinner from "./Spinner";

/**
 * This is a top level component which wraps and renders the Notification and the Spinner component
 * around the top level parent container view
 */
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
