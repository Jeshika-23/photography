import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="logo">
          <Camera size={24} className="logo-icon" />
          <span>LUMIÈRE</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#testimonials" className="nav-link">Stories</a>
          <a href="#contact" className="btn-primary">Book Now</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)}>Stories</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Book Now</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
