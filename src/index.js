import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//this configureStore import may not work
import configureStore from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </BrowserRouter>
);
