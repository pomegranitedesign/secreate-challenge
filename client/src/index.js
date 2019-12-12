import React from "react";
import { render } from "react-dom";

import App from "./Components/App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

render(<App />, document.getElementById("root"));
serviceWorker.unregister();
