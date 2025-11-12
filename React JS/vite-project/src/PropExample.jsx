import React from 'react'

// const PropExample = ({myname="Dhruvil", myage="20"}) => {
const PropExample = (props) => {
  return (
    <div>
        <h2>PropExample</h2>
        <h3>Name is -- {props.myname} </h3>
        <h3>Age is -- {props.myage} </h3>
    </div>

  )
}

// Only work in Class Componemt, not in Function
// PropExample.defaultProps = {
//     myname : "Aryan",
//     myage : 21
// }

export default PropExample;