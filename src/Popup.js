import React from "react";
import "./Popup.css";

class Popup extends React.Component {
  userData;
  constructor(props) {
    super(props);
    // this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      over21: false,
    };
  }

  handleButtonClick(e) {
    let state = this.state.over21;
    if (e.target.className == "ButtonYes") {
      state = true;
    } else state = false;
    localStorage.setItem("user", JSON.stringify({ over21: state }));
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user && user.over21) {
      this.setState({ over21: user.over21 });
    } else this.setState({ over21: false });
  }

  render() {
    return (
      <div className="Popup">
        <h1>Are you at least 21 years old?</h1>

        <form>
          <button
            onClick={(e) => this.handleButtonClick(e)}
            type="submit"
            className="ButtonYes"
          >
            Yes
          </button>
          <button
            onClick={(e) => this.handleButtonClick(e)}
            type="submit"
            className="ButtonNo"
          >
            No
          </button>
        </form>
      </div>
    );
  }
}

export default Popup;
