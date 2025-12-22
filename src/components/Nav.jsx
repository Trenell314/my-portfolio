import React from 'react'

const Nav = () => {
  return (
    <div>
      <header>
    <nav>
      <div className="toggle">
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
      <ul class="nav-items">
        <li><a href="#home-section">Home</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Nav