import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Authors from './Pages/Authors';
import Author from './Pages/Author';
import authors from './Data/authors';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/autores' element={<Authors authors={authors}/>}/>
          <Route path='/autor' element={<Author authors={authors}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
