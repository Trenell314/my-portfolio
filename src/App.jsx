import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import './styles/styles.css';

function App() {
  return ( 
    <div className="app-container">
        <Nav />
        <Home />
        <Footer />
      </div> 
  );
 
}

export default App;
