//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Header from "./component/header.jsx";
import Hero from "./component/hero.jsx";


function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Hero />
            
        </div>
    );
}

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
