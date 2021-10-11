import React from "react";
import wine from "./wineBottle.jpg";
import "./Shop.css";

class Shop extends React.Component {
  onMouseOver = () => {
    return <h3 className="wineLabel">Wine label</h3>;
  };
  render() {
    return (
      <div id="Shop">
        <h2>Shop our wines</h2>
        <div className="grid">
          <div className="grid-item">
            <h3 className="wineLabel">
              Wine label
              <br />
              Price: $70.00
            </h3>
            <img className="wine" src={wine} alt="wine" />
          </div>
          <div className="grid-item">
            {" "}
            <h3 className="wineLabel">
              Wine label
              <br />
              Price: $70.00
            </h3>
            <img className="wine" src={wine} alt="wine" />
          </div>
          <div className="grid-item">
            {" "}
            <h3 className="wineLabel">
              Wine label
              <br />
              Price: $70.00
            </h3>{" "}
            <img className="wine" src={wine} alt="wine" />
          </div>
          <div className="grid-item">
            {" "}
            <h3 className="wineLabel">
              Wine label
              <br />
              Price: $70.00
            </h3>{" "}
            <img className="wine" src={wine} alt="wine" />
          </div>
          <div className="grid-item">
            {" "}
            <h3 className="wineLabel">
              Wine label
              <br />
              Price: $70.00
            </h3>{" "}
            <img className="wine" src={wine} alt="wine" />
          </div>
          <div className="grid-item">
            {" "}
            <h3 className="wineLabel">
              Wine label
              <br />
              Price: $70.00
            </h3>{" "}
            <img className="wine" src={wine} alt="wine" />
          </div>
        </div>
      </div>
    );
  }
}
export default Shop;
