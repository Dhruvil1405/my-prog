import {useState} from 'react';
//State - mutable (can change it)
//7 hooks
//1)useState
const Statecomponent = () => {
    const [name,setName] = useState('Abcd')
    const [count,setCount] = useState(24)
    let newName = ()=> {
        // setName('Dhruvil')
        setName(prompt())
    }
    return (
        <div>
            <h3>State component Called...</h3>
            <h4>name is -- {name} </h4>
            <h4>count is -- {count} </h4>
            <button onClick={newName}>Change Name</button>
            <button onClick={()=>setCount(20)}>Add Counter</button>
        <hr />
        </div>
    )
}

export default Statecomponent;