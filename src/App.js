import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./App.css";

import { Root } from "./Components/NotificationBanner";
import HomeScreen from "./Views/HomeScreen";

const store = createStore(() => ({}), applyMiddleware(thunk));

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <HomeScreen />
        </Root>
      </Provider>
    );
  }
}
