import { useState } from 'react'
import Classcomponent from './ClassComponent'
import ClassExample from './ClassExample'
import LifecycleFunction from './LifecycleFunction'
import RevisionOne from './RevisionOne'
// import Usercomponent from './Usercomponent'
import UsercomponentOne from './UsercomponentOne'
import PropExample from './PropExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Vite Project</h2>
      {/* <Classcomponent /> */}
      {/* <ClassExample myname="test" /> */}
      {/* <LifecycleFunction /> */}
      {/* <RevisionOne myname="test"/> */}
      {/* <Usercomponent /> */}
      {/* <UsercomponentOne /> */}
      <PropExample myname="abc" myage="26" />
    </>
  )
}

export default App
