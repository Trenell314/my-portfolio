import {useState} from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
  <header>
    <nav>
      <div className={["toggle", isOpen ? "open" : ""].join(" ")} onClick={toggleMenu}>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
      <ul className={["nav-items", isOpen ? "open" : ""].join(" ")}>
        <li><a href="#home-section">Home</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Nav