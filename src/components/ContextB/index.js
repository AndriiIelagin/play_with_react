import React, { Component } from 'react';
import { UserConsumer, UserContext } from '../../contexts/userContext';

export class ContextB extends Component {
  static contextType = UserContext
  render() {
    return (
      // <UserConsumer>
      //   {username => {
      //     return <div>Hello {username}</div>;
      //   }}
      // </UserConsumer>
      <div>{this.context}</div>
    );
  }
}

export default ContextB;
