import React, { Component } from "react";
import "./App.css";
import Routes from "./Router";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Navbar/Header";
import Navigation from "./components/Shared/Navbar/Navigation";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header/>
				<div className="mainContent">
					<Navigation/>
					<Routes/>
					<Footer/>
				</div>
			</React.Fragment>
			
		);
	}
}

export default App;
