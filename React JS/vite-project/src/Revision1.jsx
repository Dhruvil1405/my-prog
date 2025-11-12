import React, { Component } from 'react'

class Revision1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: this.props.myname
    }
    console.log("constructor Called...");
  }
  componentDidMount() {
    console.log("componentDidMount Called...");
    setTimeout(() => {
      this.setState({
        name: "Dhruvil",
      });
    }, 3000)
  }

  render() {
    return (
      <div>
        <h2>Revision1</h2>
      </div>
    )
  }
}

export default Revision1;