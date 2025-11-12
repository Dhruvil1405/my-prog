import React, { useEffect, useState } from 'react'

const LifecycleFunction = () => {
  const [name, setName] = useState("test");
  useEffect(() => {
    setTimeout(() => {
      setName("Abcd")
    }, 3000)
  }, [])
  return (
    <div>
      <h2>Function Lifecycle Called...</h2>
      <h3>Name is -- {name} </h3>
    </div>
  )
}

export default LifecycleFunction;