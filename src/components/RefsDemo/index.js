import React, { Component, createRef } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter some text" ref={this.inputRef} />
        <button onClick={() => this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
