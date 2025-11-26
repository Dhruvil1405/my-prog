import { useState } from 'react'
import Classcomponent from './ClassComponent'
import ClassExample from './ClassExample'
import LifecycleFunction from './LifecycleFunction'
import Revision1 from './Revision1'
import Usercomponent from './Usercomponent'
import UsercomponentOne from './UsercomponentOne'
import PropExample from './PropExample'
import EmpComponent from './EmpComponent'
import Emp_component from './Emp_component'
import ApiExample from './ApiExample'
import ApiCrudExample from './ApiCrudExample'
import Menu from './Router/Menu'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import About1 from './Router/About1'
import About2 from './Router/About2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Vite Project</h2>
      {/* <Classcomponent /> */}
      {/* <ClassExample myname="test" /> */}
      {/* <LifecycleFunction /> */}
      {/* <Revision1/> */}
      {/* <Usercomponent /> */}
      {/* <UsercomponentOne /> */}
      {/* <PropExample myname="abc" myage={25} /> */}
      {/* <EmpComponent /> */}
      {/* <Emp_component /> */}
      {/* <ApiExample /> */}
      {/* <ApiCrudExample /> */}
      <Menu />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path='a1' element={<About1 />} />
          <Route path='a2' element={<About2 />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
