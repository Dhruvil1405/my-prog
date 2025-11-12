//rafc- for arrow function
//rfc- for function
//rcc - react class component
import React, { Component } from 'react'

class Classcomponent extends Component {
  constructor(){
    super()
    this.state = {
      name : "test",
      age : 25,
      salary : 45000
    }
    this.handleClick = () => {
      this.setState({
        name:"Dhruvil",
      })
    }
    this.handleClick2 = () => {
      this.setState({
        age:20,
      })
    }
    this.handleClick3 = () => {
      this.setState({
        salary:prompt(""),
      })
    }

  }
  render() {
    return (
      <div>
        <h2>Classcomponent called..</h2>
        <h4>Name is -- {this.state.name} </h4>
        <h4>age is -- {this.state.age} </h4>
        <h4>salary is -- {this.state.salary} </h4>
        <button onClick={this.handleClick}>Change Name</button>
        <button onClick={this.handleClick2}>Change Age</button>
        <button onClick={this.handleClick3}>Change Salary</button>

      </div>
    )
  }
}

export default Classcomponent;