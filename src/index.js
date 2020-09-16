import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./app";
import store from "./reducer/index";

ReactDOM.render(
<Provider  store = {createStore(store)}>
 <App />
</Provider>
, document.getElementById("root"));

