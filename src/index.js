import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
import App from "./App";

//ReactDom.render(<App />, document.getElementById("root"));
//serviceWorker.unregister();

ReactDom.render(<Counter />, document.getElementById("root"));
serviceWorker.unregister();
