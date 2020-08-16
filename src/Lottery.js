import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    maxValue: 40,
    maxBall: 4,
    title: "Mini Pool",
  };
  constructor(props) {
    super(props);
    this.state = {
      ballSeq: new Array(this.props.maxBall).fill(null),
    };
  }
  //   state = {
  //     ballSeq: new Array(this.props.maxBall).fill(null),
  //   };

  generateValue = (num) => Math.floor(Math.random() * this.props.maxValue) + 1;
  //   getBallSequence = () => {
  //     const ballSeq = [];
  //     for (let i = 0; i < this.props.maxBall; i++) {
  //       ballSeq[i] = this.generateValue();
  //     }
  //     this.setState({
  //       ballSeq: ballSeq,
  //     });
  //   };

  getBallSequence = () =>
    this.setState((currState) => ({
      ballSeq: currState.ballSeq.map((ball) => this.generateValue()),
    }));

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="Lottery-ball">
          {this.state.ballSeq.map((ball) => (
            <Ball seq={ball} />
          ))}
        </div>
        <button onClick={this.getBallSequence}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
