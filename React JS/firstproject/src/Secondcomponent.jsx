// shortcut trics for direct generate basic code using = rfc-for function , rafc - fro arrow function

import styled from "styled-components";

// const Secondcomponent = (props)=>{
    //immutable - props(do not change)
const Secondcomponent = ({myname,myage,sal})=>{
    let H4 = styled.h4 `
        color:red;
        background-color:green;
    `
    return (
        <>
        <div>
            <h3>Second Component Called..</h3>
            <h4>Name is -- {myname}</h4>
            <h4>Age is -- {myage}</h4>
            {/* <h4>Salary is -- {sal}</h4> */}
            <H4>Salary is -- {sal}</H4>
            {/* <h4>Name is -- {props.myname}</h4>
            <h4>Age is -- {props.myage}</h4>
            <h4>Salary is -- {props.sal}</h4> */}
        <hr />
        </div>
        </>
    )
}
export default Secondcomponent;