
import './App.css';
import Menu from './components/MenuComponent';
import ParentComponent from './examples/Parent';
import PropExampleComponent from './examples/PropExample';
import Sample from './examples/Sample';
import Users from './examples/Users';

function App() {
  return (
    <>
    <div className="App">
      <Menu />
    </div>
    <div className="Users">
      <Users />
    </div>
    <div className="Users">
      <ParentComponent />
    </div>
    <div className="Users">
      <Sample />
    </div>
    <div className="Users">
      <PropExampleComponent name="David" age={23} callback={() => console.log("heelo")} address={{street: "MG Road", FlatNo: 18}} />
    </div>
    </>
  );
}

export default App;
