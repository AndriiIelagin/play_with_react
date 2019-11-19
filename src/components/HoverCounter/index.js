import React, { Component } from 'react';
import withCounter from '../../HOC/withCounter';

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <div onMouseOver={incrementCount}> Hovered {count} times</div>;
  }
}

export default withCounter(HoverCounter, 4);
