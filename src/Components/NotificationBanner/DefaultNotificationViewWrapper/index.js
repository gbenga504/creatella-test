import React from "react";
import "./index.css";

import { _Store } from "../index";

/**
 * This file contains the component that actually builds the notificatin view
 * We listen to the local store and unsubscribe from the store when the component is unmounted
 */

class DefaultNotificationView extends React.PureComponent {
  state = {
    visible: false,
    currentVisibleProperties: {
      title: "",
      type: ""
    }
  };

  componentDidUpdate(prevProps) {
    let { trigger, shouldShow } = this.props;

    if (trigger && prevProps.trigger !== trigger && shouldShow) {
      clearTimeout(this.timer);
      this.state.visible
        ? setTimeout(() => this.show(true), 500)
        : setTimeout(() => this.show(), 500);
    } else if (
      trigger &&
      prevProps.trigger !== trigger &&
      shouldShow === false
    ) {
      this.dismiss();
      clearTimeout(this.timer);
    }
  }

  show = shouldRenderPreviousFalsy => {
    if (shouldRenderPreviousFalsy) {
      clearTimeout(this.timer);
      this.setState(
        {
          visible: false
        },
        () => setTimeout(this.makeNotificationModalVisible, 1000)
      );
    } else {
      this.makeNotificationModalVisible();
    }
  };

  makeNotificationModalVisible = () => {
    let { duration, title, type } = this.props;
    this.setState(
      {
        visible: true,
        currentVisibleProperties: {
          title,
          type
        }
      },
      () => {
        this.timer = setTimeout(
          () => this.setState({ visible: false }),
          duration || 5000
        );
      }
    );
  };

  dismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    let {
      visible,
      currentVisibleProperties: { title, type }
    } = this.state;

    return (
      <div
        className={`notification-banner ${visible &&
          "notification-banner--show"} d-flex justify-content-between align-items-center`}
      >
        <span className="notification-banner__title">{title}</span>
        {type === "addition" ? (
          <i className="mdi mdi-thumb-up" />
        ) : (
          <span className="notification-banner__title notification-banner__undo-text">
            UNDO
          </span>
        )}
      </div>
    );
  }
}

export default class DefaultNotificationViewWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      trigger: Date.now(),
      shouldShow: false,
      duration: 5000,
      autoDismiss: true,
      bannerPosition: "top",
      title: "",
      subtitle: "",
      style: "success",
      customView: null
    };

    this.listenToStore();
  }

  listenToStore = () => {
    this.unsubscribeStore = _Store.listen(() => {
      let state = _Store.getState();
      if ("notificationBanner" in state) {
        this.setState({
          ...state["notificationBanner"]
        });
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    return <DefaultNotificationView {...this.state} />;
  }
}
