import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Authors from './Pages/Authors';
import Author from './Pages/Author';

function App() {

  const authors = [
    {
        "id": 1,
        "nome": "Gabriel García Márquez",
        "biografia": "Gabriel García Márquez foi um escritor, jornalista, editor, ativista e político colombiano. Conhecido principalmente por seus romances, García Márquez é uma das figuras mais importantes da literatura do século XX. Ele recebeu o Prêmio Nobel de Literatura em 1982.",
        "ano_de_nascimento": 1927
    },
    {
        "id": 2,
        "nome": "Jane Austen",
        "biografia": "Jane Austen foi uma escritora inglesa conhecida por seus seis grandes romances, que interpretam, criticam e comentam a sociedade britânica do início do século XIX. Suas obras mais conhecidas incluem 'Orgulho e Preconceito' e 'Razão e Sensibilidade'.",
        "ano_de_nascimento": 1775
    },
    {
        "id": 3,
        "nome": "J.K. Rowling",
        "biografia": "J.K. Rowling é uma autora e roteirista britânica, conhecida mundialmente por escrever a série de livros 'Harry Potter'. A série ganhou popularidade global, venceu vários prêmios e vendeu mais de 500 milhões de cópias, se tornando a série de livros mais vendida da história.",
        "ano_de_nascimento": 1965
    },
    {
        "id": 4,
        "nome": "George Orwell",
        "biografia": "George Orwell, pseudônimo de Eric Arthur Blair, foi um escritor, jornalista e crítico literário britânico. Suas obras mais famosas são '1984' e 'A Revolução dos Bichos', que exploram temas como totalitarismo, censura e liberdade de expressão.",
        "ano_de_nascimento": 1903
    },
    {
        "id": 5,
        "nome": "Chimamanda Ngozi Adichie",
        "biografia": "Chimamanda Ngozi Adichie é uma escritora nigeriana cujas obras incluem romances, contos e ensaios. Ela é conhecida por seus livros 'Meio Sol Amarelo', 'Americanah' e 'Hibisco Roxo', que abordam temas como identidade, imigração e o papel das mulheres na sociedade.",
        "ano_de_nascimento": 1977
    }
];

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
