import { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
// import image from "../assets/Blue and Yellow Modern Education Logo.png"

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuVisible(true);
  };

  const handleCrossClick = () => {
    setMobileMenuVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setMobileMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">Logo</Link>
        {/* <img className='image1' src={image} alt="Logo" /> */}
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Reviews</Link></li>
        </ul>
      </div>
      <div className="nav-button">
        <div className="anim-layer"></div>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div id="hamburger-menu" onClick={handleHamburgerClick}>&#9776;</div>

      <div id="mobile-menu" className={mobileMenuVisible ? 'visible' : ''}>
        <div className="mobile-nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Reviews</Link></li>
          </ul>
        </div>
        <div className="mobile-nav-button">
          <div className="anim-layer"></div>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div id="hamburger-cross" onClick={handleCrossClick}>&#10006;</div>
      </div>
    </div>
  );
};

export default Navbar;
