import React from "react";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
