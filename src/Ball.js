import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        <button>{this.props.seq}</button>
      </div>
    );
  }
}

export default Ball;
