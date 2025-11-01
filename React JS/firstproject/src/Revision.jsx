import { useState } from 'react'

const Revision = () => {
    const [name, setName] = useState('Aryan')
    const [count, setCount] = useState(18)
    let newName = () => {
        setName(prompt())
    }
    return (
        <div>
            <h3>Revision Called..</h3>
            <h4>Name is --- {name} </h4>
            <h4>Age is --- {count} </h4>
            <button onClick={newName}>Change Name</button>
            <button onClick={() => setCount(20)}>Add Count</button>
        <hr />
        </div>
    )
}

export default Revision;