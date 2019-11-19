import React, { Component } from 'react';
import SimpleButton from '../SimpleButton';
import withCounter from '../../HOC/withCounter';

class ClickCounter extends Component {

  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <h3>{name} Clicked {count} times</h3>
        <SimpleButton onClick={incrementCount} />
      </div>
    );
  }
}

export default withCounter(ClickCounter, 2);
