import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      NavTasting:
        window.location.pathname && window.location.pathname === "/"
          ? "Selected"
          : "NotSelected",
      NavGarden:
        window.location.pathname &&
        window.location.pathname.toLowerCase().includes("garden")
          ? "Selected"
          : "NotSelected",
      NavShop:
        window.location.pathname &&
        window.location.pathname.toLowerCase().includes("shop")
          ? "Selected"
          : "NotSelected",
      NavAbout:
        window.location.pathname &&
        window.location.pathname.toLowerCase().includes("about")
          ? "Selected"
          : "NotSelected",
      NavJoin:
        window.location.pathname &&
        window.location.pathname.toLowerCase().includes("join")
          ? "Selected"
          : "NotSelected",
    };
  }
  handleSelected(e) {
    let state = this.state;
    let target = e.target.id;
    let keys = Object.keys(state);
    keys.map((key) =>
      key == target ? (state[key] = "Selected") : (state[key] = "NotSelected")
    );
    this.setState(state);
  }
  render() {
    console.log(window.location.pathname);
    return (
      <div id="Nav" className="HorizontalContainer">
        <div className="Logo">
          <Link to="/">
            <h1>Sonoma Family Winery</h1>
          </Link>
        </div>
        <br />
        <div className="Menu-horizontal">
          <ul>
            <li>
              <Link
                id="NavTasting"
                className={this.state.NavTasting}
                onClick={(e) => this.handleSelected(e)}
                to="/"
              >
                Tasting Experiences
              </Link>
            </li>
            <li>
              <Link
                id="NavGarden"
                className={this.state.NavGarden}
                onClick={(e) => this.handleSelected(e)}
                to="/garden"
              >
                The Garden
              </Link>
            </li>
            <li>
              <Link
                id="NavShop"
                className={this.state.NavShop}
                onClick={(e) => this.handleSelected(e)}
                to="/shop"
              >
                Shop Our Wine
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                id="NavAbout"
                className={this.state.NavAbout}
                onClick={(e) => this.handleSelected(e)}
              >
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                id="NavJoin"
                className={this.state.NavJoin}
                onClick={(e) => this.handleSelected(e)}
                to="/join"
              >
                Join
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Nav;
