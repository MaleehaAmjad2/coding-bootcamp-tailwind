import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1B5E20] sticky top-0 z-50 border-b-2 border-[#D4C5B0] shadow-md">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-[70px]">
        <Link to="/" className="text-white text-3xl font-bold">CodeBootcamp</Link>
        
        <ul className={`flex list-none gap-10 items-center max-md:absolute max-md:top-[70px] max-md:left-0 max-md:w-full max-md:bg-[#F5F1E8] max-md:flex-col max-md:gap-0 max-md:overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-md:max-h-[400px] max-md:gap-5 max-md:p-5" : "max-md:max-h-0"}`}>
          <li><Link to="/" className="text-white font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">Home</Link></li>
          <li><Link to="/courses" className="text-white font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">Courses</Link></li>
          <li><Link to="/about" className="text-white font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">About</Link></li>
          <li><Link to="/dashboard" className="text-white font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">Dashboard</Link></li>
          <li><Link to="/getstarted" className="bg-[#2E7D32] text-white px-5 py-2 rounded-lg">Get Started</Link></li>
        </ul>
        
        <button className="hidden max-md:block bg-transparent text-white text-2xl border-none cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
    </nav>
  );
}