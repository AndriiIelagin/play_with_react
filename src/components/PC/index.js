import React, { Component, PureComponent } from "react";

const Temp = props => {
  console.log("render Temp");
  return <div>{props.val}</div>;
};

export default class PC extends PureComponent {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        return { val: 1 };
      });
    }, 2000);
  }

//   shouldComponentUpdate(nextProp, nextState) {
//     return this.state.val === nextState.val ? false : true;
//   }
  render() {
    console.log("render PC");
    return (
      <div>
        <Temp val={this.state.val} />
      </div>
    );
  }
}
