import React from "react";
import { hydrate, render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	hydrate(<App />, rootElement);
} else {
	render(<App />, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>
// );
