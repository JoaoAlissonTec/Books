import './App.css';
import RoutesApp from './Routes';
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <RoutesApp/>
      </div>
    </DataProvider>
  );
}

export default App;
