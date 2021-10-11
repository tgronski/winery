import React from "react";
import Popup from "./Popup";
import "./Container.css";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  componentDidMount() {
    let local = JSON.parse(localStorage.getItem("user"));
    if (!local) {
      this.setState({ local1: { over21: false } });
    } else this.setState({ local1: local.over21 });
  }
  render() {
    console.log(this.state);
    return (
      <div id="Container">
        {!this.state ||
        this.state.local1 === false ||
        this.state.local1.over21 === false ? (
          <Popup className="Popup" />
        ) : null}
      </div>
    );
  }
}
export default Container;
