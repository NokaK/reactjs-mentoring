import FunctionComp from './components/FunctionComp'
import ClassComp from './components/ClassComp'
import PureComp from './components/PureComp'
import {CreateElemComp} from'./components/CreateElemComp'

function App() {
  return (
    <div className="App">
      Hello World
      <CreateElemComp/>
      <ClassComp/>
      <PureComp/>
      <FunctionComp/> 
    </div>
  );
}

export default App;
