import logo from './logo.svg';
import './App.css';
import { PersonProvider } from './components/PersonProvider';
import First from './components/First';
import UseStateExample from './components/UseStateExample';
import UseReducerExample from './components/UseReducerExample';
import UseEffectExample from './components/Effect';

function App() {
  return (
    <div className="App">
      {/* <PersonProvider>
        <First />
      </PersonProvider> */}
      {/* <UseStateExample /> */}
      {/* <UseReducerExample /> */}
      <UseEffectExample />
    </div>
  );
}

export default App;
