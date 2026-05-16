import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    } else {
      document.body.classList.remove("dark-mode");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      // Switch to light
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="bg-[#1B5E20] sticky top-0 z-50 border-b-2 border-[#D4C5B0] shadow-md">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-[70px]">
        <Link to="/" className="text-white text-3xl font-bold">CodeBootcamp</Link>

        <ul className={`flex list-none gap-5 items-center max-md:absolute max-md:top-[70px] max-md:left-0 max-md:w-full max-md:bg-[#F5F1E8] max-md:flex-col max-md:gap-0 max-md:overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-md:max-h-[500px] max-md:gap-3 max-md:p-5" : "max-md:max-h-0"}`}>
          <li><Link to="/" className="text-white font-medium">Home</Link></li>
          <li><Link to="/courses" className="text-white font-medium">Courses</Link></li>
          <li><Link to="/about" className="text-white font-medium">About</Link></li>
          <li><Link to="/dashboard" className="text-white font-medium">Dashboard</Link></li>
          <li><Link to="/login" className="bg-[#2E7D32] text-white px-4 py-1 rounded-lg">Login</Link></li>
          <li><Link to="/register" className="bg-[#2E7D32] text-white px-4 py-1 rounded-lg ml-2">Sign Up</Link></li>
          <li>
            <button onClick={toggleDarkMode} className="bg-[#2E7D32] text-white px-3 py-1 rounded-lg text-sm">
              {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>

        <button className="hidden max-md:block bg-transparent text-white text-2xl border-none cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
    </nav>
  );
}