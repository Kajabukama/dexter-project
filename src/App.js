import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import Routes from "./Router";
import Footer from "./components/Shared/Footer/Footer";

class App extends Component {
	render() {
		return (
			<div className="siteWrap">
				<Navbar/>
				<Routes/>
				<Footer/>
			</div>
		);
	}
}

export default App;
