import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/Navbar';
import Rodape from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Infos from './pages/Infos';
import Pagina404 from './pages/Pagina404';

function App() {
  return (
       <div className="App">
      <Router>
        <NavBar  />
        <div className="container">
          <Routes>
     <Route exact path="/" element={<Home />}/>
        <Route exact path="/" element={<About />}/>
           <Route exact path="/" element={<Infos />}/>
       <Route element={<Pagina404 />}/>


          </Routes>
        </div>
        <Rodape/>
      </Router>
    </div>
  );
}

export default App;
