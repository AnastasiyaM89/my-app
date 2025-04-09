// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
	const currentYear = new Date().getFullYear(); //декларативный

	return React.createElement("p", null, currentYear); //декларативный
}

export default App;
