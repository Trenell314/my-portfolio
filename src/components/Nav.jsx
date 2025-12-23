import {useState, useRef, useEffect} from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setIsOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
  <header>
    <nav ref={menuRef}>
      <div className={["toggle", isOpen ? "open" : ""].join(" ")} onClick={toggleMenu}>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
      <ul className={["nav-items", isOpen ? "open" : ""].join(" ")}>
        <li><a href="#home-section" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about-section" onClick={toggleMenu}>About</a></li>
        <li><a href="#contact-section" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Nav