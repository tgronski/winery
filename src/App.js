import React from "react";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import Container from "./Container";
import "./App.css";
import Footer from "./Footer";
import Tasting from "./Tasting";
import About from "./About";
import Instagram from "./Instagram";
import Join from "./Join";
import Shop from "./Shop";

class App extends React.Component {
  renderMainRoutes() {
    return (
      <span>
        <Route path="/" component={Container} />
        <Route exact path="/" component={Tasting} />
        <Route exact path="/about" component={About} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/shop" component={Shop} />
      </span>
    );
  }

  render() {
    return (
      <div
        className="App"
        style={
          JSON.parse(localStorage.getItem("user")) &&
          JSON.parse(localStorage.getItem("user")).over21 === true
            ? null
            : { backgroundColor: "rgba(0, 0, 0, 0.242)", zIndex: 100 }
        }
      >
        <header className="App-header">
          <Nav />
        </header>
        <div className="Main">
          <span>{this.renderMainRoutes()}</span>
          <Instagram />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
