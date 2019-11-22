import React, { useState } from 'react'

function withCounter(WrappedComponent, incrementNumber) {
  // class WithCounter extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.state = {
  //       count: 0
  //     };
  //   }
  
  //   incrementCount = () => {
  //     this.setState(prevState => {
  //       return { ...prevState, count: prevState.count + incrementNumber };
  //     });
  //   };
  //   render() {
  //     return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
  //   }
  // }
  // return WithCounter;

  const WithCounter = (props) => {
    const [count, setCount] = useState(0)
    return <WrappedComponent count={count} incrementCount={() => setCount(prevCount => prevCount + incrementNumber)} {...props} />
  }
  return WithCounter;
}

export default withCounter
