import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-main">
      <div className="nav-container">
        <Link to="/" className="nav-logo">CodeBootcamp</Link>
        <ul className={`nav-menu nav-active ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/courses" className="nav-link">Courses</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
          <li className="nav-item"><Link to="/getstarted" className="nav-link nav-link-cta">Get Started</Link></li>
        </ul>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
    </nav>
  );
}