import React, { Component } from 'react'
import ContextB from '../ContextB'

export class ContextA extends Component {
  render() {
    return (
      <div>
        <ContextB />
      </div>
    )
  }
}

export default ContextA
