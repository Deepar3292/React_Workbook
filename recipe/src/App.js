
import './App.css';
import Menu from './components/MenuComponent';
import ParentComponent from './examples/Parent';
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
    </>
  );
}

export default App;
