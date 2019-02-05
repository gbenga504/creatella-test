import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./App.css";
import { appReducers } from "./Store/reducers";

import Root from "./Components/Root";
import HomeScreen from "./Views/HomeScreen";

const store = createStore(appReducers, applyMiddleware(thunk));

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
