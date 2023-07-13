
import './App.css';
import Menu from './components/MenuComponent';
import ParentComponent from './examples/Parent';
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
    </>
  );
}

export default App;
