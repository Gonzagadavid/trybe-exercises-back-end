import './App.css';
import Board from './components/Board';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider className="App">
     <h1>App</h1>
     <Board />
    </AppProvider>
  );
}

export default App;
