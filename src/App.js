import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>Proyecto de react</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const App = () => (
  <Router>
    <Route path="/" exact component={ Header }/>
    <Route path="/estudiantes" exact component={ Contenedor }/>
    <Route path="/contacto" exact component={ Contacto }/>
  </Router>

)



export default App;
