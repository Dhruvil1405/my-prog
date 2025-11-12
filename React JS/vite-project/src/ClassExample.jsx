import React, { Component } from 'react'

class ClassExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: this.props.myname,
    };
    console.log("constructor Called..");
  }
  componentDidMount() {
    console.log("componentDidMount called..");
    setTimeout(() => {
      this.setState({
        name: "ABCD",
      });
    }, 3000);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Called...");
    console.log("props");
    console.log(props);
    console.log("state");
    console.log(state);
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate Called...");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Called..");
    console.log("Previous State..");
    console.log(prevState);
    return null;
  }
  componentDidUpdate() {
    console.log("Finally Component Updated..");
  }           
  render() {
    console.log("render Called...");
    return (
      <div>
        <h2>Lifecycle</h2>
        <h4>Name is -- {this.state.name} </h4>
        <h4>Count is -- {this.state.count} </h4>
      </div>
    );
  }
}

export default ClassExample;