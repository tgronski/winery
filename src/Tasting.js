import React from "react";
import tasting1 from "./picnicTasting.jpeg";
import tasting2 from "./tastingFormal.jpeg";
import tasting3 from "./tastingView.jpeg";
import "./Tasting.css";
import LazyLoad from "react-lazyload";
import VisibilitySensor from "react-visibility-sensor";

class Tasting extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      tasting: 1,
      selected: "Selected",
      notSelected: "NotSelected",
    };
  }

  render() {
    let state = this.state;

    return (
      <div id="Tasting">
        <h2>Our unique tasting experiences</h2>
        <VisibilitySensor
          onChange={(isVisible) => {
            this.setState({ visible: isVisible });
          }}
        >
          <LazyLoad height={410} className="ImageBanner">
            <img
              src={tasting2}
              className={state.visible ? "ImageBannerImage" : "HiddenImage"}
            />
            <img
              src={tasting1}
              className={state.visible ? "ImageBannerImage" : "HiddenImage"}
            />
            <img
              src={tasting3}
              className={state.visible ? "ImageBannerImage" : "HiddenImage"}
            />
          </LazyLoad>
        </VisibilitySensor>
        <div
          style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}
        >
          {" "}
          <div className="Menu-horizontal">
            <ul>
              <li
                onClick={() => this.setState({ tasting: 1 })}
                className={
                  state.tasting == 1 ? state.selected : state.notSelected
                }
              >
                Formal Tasting
              </li>
              <li
                onClick={() => this.setState({ tasting: 2 })}
                className={
                  state.tasting == 2 ? state.selected : state.notSelected
                }
              >
                Picnic in the Garden
              </li>
            </ul>
          </div>
          {state.tasting == 1 ? (
            <p>
              The formal tasting experience is the best way to learn about our
              wines. You'll taste 6 of our wines from our outdoor patio
              overlooking the vineyard. Our formal tastings are reservation
              only.{" "}
            </p>
          ) : (
            <p>
              The picnic tasting is great for large groups, dogs, and families.
              You'll recieve a picnic basket with curated snacks, and you can
              purchase any of our wines by the bottle. Picnic tables on first
              come first serve basis; dress accoringly
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default Tasting;
