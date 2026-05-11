import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-main">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">CodeBootcamp</h4>
          <p className="footer-text">Your gateway to a successful coding career</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/courses" className="footer-link">Courses</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/dashboard" className="footer-link">Dashboard</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Facebook</a></li>
            <li><a href="#" className="footer-link">Twitter</a></li>
            <li><a href="#" className="footer-link">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2026 CodeBootcamp. All rights reserved.</p>
      </div>
    </footer>
  );
}