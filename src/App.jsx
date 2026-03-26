import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import './styles/styles.css';

function App() {
  return ( 
    <div className="app-container">
        <Nav />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div> 
  );
 
}

export default App;
