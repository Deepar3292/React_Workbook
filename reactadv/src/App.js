import logo from './logo.svg';
import './App.css';
import { PersonProvider } from './components/PersonProvider';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <PersonProvider>
        <First />
      </PersonProvider>
    </div>
  );
}

export default App;
