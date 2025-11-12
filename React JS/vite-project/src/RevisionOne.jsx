import React, { Component } from 'react'

class RevisionOne extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0,
      name : this.props.myname,
    }
    console.log("Constructor Called...");
  }
  componentDidMount(){
    console.log("componentDidMount Called...");
    setTimeout(()=>{
      this.setState({
        name: "Dhruvil",
      });
    },3000);
  }
  static getDerivedStateFromProps (props,state){
    console.log("getDerivedStateFromProps Called...");
    console.log("props");
    console.log(props);
    console.log("state");
    console.log(state);
    return null;
  }
  shouldComponentUpdate (){
    console.log("shouldComponentUpdate Called..");
    return true;
  }
  getSnapshotBeforeUpdate(prevState){
    console.log("getSnapshotBeforeUpdate called..");
    console.log("previous State..");
    console.log(prevState);
    return null;
  }
  componentDidUpdate(){
    console.log("Finally component Called..");
  }

  render() {
    return (
      <div>
        <h2>RevisionOne</h2>
        <h3>Name is -- {this.state.name} </h3>
        <h3>Count is -- {this.state.count} </h3>

      </div>

    )
  }
}

export default RevisionOne;