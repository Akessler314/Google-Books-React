import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages 
import About from "./pages/About/About";
// import Saved from "./pages/Saved";
// import Search from "./pages/Search";
//Components
import Navbar from "./components/Navbar/navbar";


import "./App.css";

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Route exact path="/" component={About} />
    </div>
    </Router>
  );
}


export default App;
