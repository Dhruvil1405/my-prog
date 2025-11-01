import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Statecomponent from './Statecomponent';
import Revision from './Revision';
import Styledcomponent from './Styledcomponent';

function App() {
  const name = 'abc'
  let age = 25
  let salary = 45000
  return (
    <>
    {/* <Firstcomponent /> */}
    <Secondcomponent myname={name} myage={age} sal={salary} />
    {/* <Statecomponent />   */}
    {/* <Revision /> */}
    <Styledcomponent />
    </>
  );
}

export default App;
